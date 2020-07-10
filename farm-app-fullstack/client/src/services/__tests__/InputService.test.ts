import { BACK_BUTTON_ID, InputService } from "../InputService";
import { DocumentSubject, EType } from "../DocumentService";

describe("Input Service", () => {
  it("should correctly ", async (done) => {
    InputService.BackButtonSubject.subscribe(() => {
      // If test gets here, it will pass
      done();
    });
    DocumentSubject.next({ id: BACK_BUTTON_ID, type: EType.Click });
  });
});
