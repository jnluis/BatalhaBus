import React from 'react';

function Modal({ isOpen }) {
    return (
        <div
            className={`z-10 inset-0 overflow-y-auto flex justify-center ${isOpen ? 'block' : 'hidden'}`}

        >
            <div className="flex min-h-screen  pt-4 px-6 pb-20 sm:block sm:p-0">
                <div
                    className="fixed inset-0 transition-opacity"
                    aria-hidden="true"
                >
                    <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
                </div>

                <div
                    className="pt-5 pb-4 transform transition-all"
                    role="dialog"
                    aria-modal="true"
                    aria-labelledby="modal-headline"
                >
                    
                        <div className="mt-3 flex justify-center align-items-center h-[100px] w-full text-center sm:mt-5">
                            <h3
                                className="text-[50px] text-gray-900"
                                id="modal-headline"
                            >
                                Este jogo ainda não está disponível
                            </h3>
                        </div>
                    
                </div>
            </div>
        </div>
    );
}

export default Modal;
