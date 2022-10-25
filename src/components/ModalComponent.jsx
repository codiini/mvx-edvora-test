import ModalForm from "./ModalForm";

export default function ModalComponent({ showModal, setShowModal }) {
  return (
    <>
      {showModal ? (
        <>
          <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-scroll outline-none focus:outline-none">
            <div className="relative my-6 mx-auto w-full max-w-5xl">
              <div className="relative flex w-full flex-col rounded-xl bg-white bg-white bg-white shadow-lg outline-none focus:outline-none">
                <div className="flex items-center justify-center rounded-xl bg-edvora-purple">
                  <div className="relative top-14 w-full items-center bg-edvora-purple pt-16">
                    <h3 className="app-font-bold relative bottom-16 flex w-full items-center justify-center text-center text-3xl text-white">
                      Add New Events
                    </h3>
                    <button
                      className="absolute right-0 -top-10 text-3xl"
                      onClick={() => setShowModal(false)}
                    >
                      <img src="/icons/close-btn.svg" alt="" />
                    </button>
                  </div>
                </div>
                <div className="oveflow-scroll relative bottom-4 h-full p-8">
                  <ModalForm />
                </div>
              </div>
            </div>
          </div>
          <div className="fixed inset-0 z-40 bg-black opacity-50"></div>
        </>
      ) : null}
    </>
  );
}
