import { useState } from "react";
import Modal from "../modal/modal";
import { Button } from "../../styles/button";
import { LoadingSpinner } from "../loadingSpinner";
import { ModalContent } from "./styles";

interface props {
  action: () => Promise<void> | void;
  cancelAction: () => void;
  message: string;
}

const ConfirmModal = ({ action, cancelAction, message }: props) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  async function handleAction() {
    setLoading(() => true);
    if (error) setError(null);
    try {
      await action();
    } catch (error) {
      const { message } = error as Error;
      setError(message);
    }
    setLoading(() => false);
  }

  return (
    <Modal handleClose={cancelAction}>
      <ModalContent>
        <p>{message}</p>
        {!loading ? (
          <div className="actions">
            <Button $color="#df0505" onClick={handleAction}>
              Sim
            </Button>
            <Button $color="#132ec7" onClick={cancelAction}>
              Não
            </Button>
          </div>
        ) : (
          <LoadingSpinner />
        )}
        {error && <span>{error}</span>}
      </ModalContent>
    </Modal>
  );
};

export default ConfirmModal;
