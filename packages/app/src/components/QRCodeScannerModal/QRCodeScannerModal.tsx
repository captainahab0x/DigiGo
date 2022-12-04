import { Modal } from "@/components/Modal";
import { useErrorToast } from "@/hooks/useErrorToast";

// eslint-disable-next-line @typescript-eslint/no-var-requires
const QrReader = require("react-qr-scanner");

export interface QRCodeScannerModalProps {
  isOpen: boolean;
  onClose: () => void;
  onScan: (text: string) => void;
}

export interface ScanResult {
  text: string;
}

export const QRCodeScannerModal: React.FC<QRCodeScannerModalProps> = ({ isOpen, onClose, onScan }) => {
  const errorToast = useErrorToast();

  return (
    <Modal isOpen={isOpen} onClose={onClose} header="WalletConnect QR Scanner">
      <QrReader
        facingMode="rear"
        delay={500}
        onScan={(result: ScanResult | undefined) => {
          if (!result) {
            return;
          }
          onScan(result.text);
          onClose();
        }}
        onError={(err: unknown) => {
          errorToast.handle(err);
        }}
      />
    </Modal>
  );
};
