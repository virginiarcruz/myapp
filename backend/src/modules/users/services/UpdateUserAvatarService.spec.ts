import AppError from '@shared/errors/AppError';

import Fake from '@shared/container/providers//fakes/Fake';
import FakeUsersRepository from '../repositories/fakes/FakeUsersRepository';
import UpdateUserAvatarService from './UpdateAvatarService';

describe('UpdateUserAvatarService', () => {
  it('should be able to create a new avatar', async () => {
    const fakeUsersRepository = new FakeUsersRepository();
    const fake = new Fake();

    const updateUserAvatar = new UpdateUserAvatarService(
      fakeUsersRepository,
      fake,
    );

    const user = await fakeUsersRepository.create({
      name: 'John Doe',
      email: 'johndoe@example.com',
      password: '123456',
    });

    await updateUserAvatar.execute({
      user_id: user.id,
      avatarFilename: 'avatar.jpg',
    });

    expect(user.avatar).toBe('avatar.jpg');
  });

  it('should NOT be able to update a avatar to a non existing user', async () => {
    const fakeUsersRepository = new FakeUsersRepository();
    const fake = new Fake();

    const updateUserAvatar = new UpdateUserAvatarService(
      fakeUsersRepository,
      fake,
    );

    expect(
      updateUserAvatar.execute({
        user_id: 'non-existing-user',
        avatarFilename: 'avatar.jpg',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });

  it('should be able to delete and old avatar when updating to a new avatar', async () => {
    const fakeUsersRepository = new FakeUsersRepository();
    const fake = new Fake();

    const deleteFile = jest.spyOn(fake, 'deleteFile');

    const updateUserAvatar = new UpdateUserAvatarService(
      fakeUsersRepository,
      fake,
    );

    const user = await fakeUsersRepository.create({
      name: 'John Doe',
      email: 'johndoe@example.com',
      password: '123456',
    });

    await updateUserAvatar.execute({
      user_id: user.id,
      avatarFilename: 'avatar.jpg',
    });

    await updateUserAvatar.execute({
      user_id: user.id,
      avatarFilename: 'updatedAvatar.jpg',
    });

    expect(deleteFile).toHaveBeenCalledWith('avatar.jpg');

    expect(user.avatar).toBe('updatedAvatar.jpg');
  });
});
