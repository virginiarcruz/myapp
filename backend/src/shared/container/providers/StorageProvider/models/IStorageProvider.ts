export default interface I {
  saveFile(file: string): Promise<string>;
  deleteFile(file: string): Promise<void>;
}
