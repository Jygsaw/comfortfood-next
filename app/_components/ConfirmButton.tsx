import React, { ReactNode } from "react";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure } from "@nextui-org/react";
import Button from "app/_components/Button";

import type { ButtonProps } from "@nextui-org/react";
import type { PressEvent } from "@react-types/shared";

type Input = {
    confirmTitle?: ReactNode,
    confirmBody?: ReactNode,
    cancelText?: ReactNode,
    confirmText?: ReactNode,
} & ButtonProps;

const ConfirmButton = ({
    confirmTitle,
    confirmBody,
    cancelText = "Cancel",
    confirmText = "Confirm",
    onPress,
    children,
}: Input) => {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();

    const handleConfirm = (onClose: () => void) =>
        (event: PressEvent) => {
            onPress?.(event);
            onClose();
        };

    return (
        <>
            <Button color="primary" onPress={onOpen}>{children}</Button>
            <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1">{confirmTitle}</ModalHeader>
                            <ModalBody>{confirmBody}</ModalBody>
                            <ModalFooter>
                                <Button onPress={onClose}>
                                    {cancelText}
                                </Button>
                                <Button color="primary" onPress={handleConfirm(onClose)}>
                                    {confirmText}
                                </Button>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </>
    );
};

export default ConfirmButton;
