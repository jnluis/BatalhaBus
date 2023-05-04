import React from 'react';

function Modal({ isOpen }) {
    return (
        <div
            className={`z-10 inset-0 overflow-y-auto ${isOpen ? 'block' : 'hidden'}`}
        >
            <div className="flex items-end justify-center min-h-screen pt-4 px-6 pb-20 text-center sm:block sm:p-0">
                <div
                    className="fixed inset-0 transition-opacity"
                    aria-hidden="true"
                >
                    <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
                </div>

                <div
                    className="inline-block rounded-lg px-6 pt-5 pb-4 w-[500px] overflow-hidden transform transition-all sm:my-8 sm:align-middle sm:max-w-sm sm:w-full sm:p-6"
                    role="dialog"
                    aria-modal="true"
                    aria-labelledby="modal-headline"
                >
                    <div>
                        <div className="mt-3 text-center sm:mt-5">
                            <h3
                                className="text-lg leading-6 text-[40px] text-gray-900"
                                id="modal-headline"
                            >
                                Este jogo ainda não está disponível
                            </h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Modal;
