import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  ModalHeader,
} from "@chakra-ui/react";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { Tooltip } from "@chakra-ui/react";

const IndustryTemplatePreview = ({ template }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Tooltip label="Preview" placement="top">
        <div
          className="bg-white p-2 rounded-lg cursor-pointer"
          onClick={(e) => {
            e.stopPropagation();
            onOpen();
          }}
        >
          <VisibilityIcon />
        </div>
      </Tooltip>
      <Modal
        isCentered
        onClose={onClose}
        isOpen={isOpen}
        motionPreset="slideInBottom"
        size={"lg"}
      >
        <ModalOverlay />
        <ModalContent className=" bg-white">
          <ModalHeader>{`${template.TYPE}`}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <img src={`${template.THUMB_URI}`} alt="" />
          </ModalBody>
          <ModalFooter className="mx-auto">
            <Button
              as={"a"}
              href={`/logo-maker/dashboard/${template.id}`}
              colorScheme="blue"
              mr={3}
              onClick={onClose}
            >
              Use this template
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default IndustryTemplatePreview;
