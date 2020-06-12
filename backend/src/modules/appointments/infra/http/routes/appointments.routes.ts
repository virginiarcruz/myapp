import { Router } from 'express';
import { parseISO } from 'date-fns';
import { container } from 'tsyringe';

import CreateAppointmentService from '@modules/appointments/services/CreateAppointmentService';

import ensureAutheticated from '@shared/infra/http/middlewares/ensureAuthenticated';
import AppointmensController from '../controllers/AppointmentsController';

const appointmentsRouter = Router();
const appointmensController = new AppointmensController();

appointmentsRouter.use(ensureAutheticated);

appointmentsRouter.post('/', appointmensController.create);

export default appointmentsRouter;
