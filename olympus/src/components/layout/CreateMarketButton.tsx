import { Stack, Dialog, Button, Portal, CloseButton, Field, Input } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import DeadlinePickerField from "./DeadlinePickerField";

interface FormValues {
    title : string;
    deadline: Date;
}

const CreateMarketButton = () => {

    const onSubmit = (data: FormValues) => {
        // 검증 통과
        console.log("Submitted:", data);
      
        // 다이얼로그 닫기
        cancelRef.current?.click(); // ActionTrigger에 ref 달아둔 버튼
    };

    const {
        register,
        handleSubmit,
        control,
        formState : { errors },
    } = useForm<FormValues>()

    return (
        <Dialog.Root size={'md'}>
            <Dialog.Trigger asChild>
                <Button variant="outline" size={'md'}>
                Create Market
                </Button>
            </Dialog.Trigger>
            <Portal>
                <Dialog.Backdrop />
                <Dialog.Positioner>
                <Dialog.Content>
                    <Dialog.Header>
                    <Dialog.Title>Create New Market</Dialog.Title>
                    </Dialog.Header>
                    <Dialog.Body>

                        <Stack>
                            <Field.Root orientation={'horizontal'}>
                                <Field.Label>Title</Field.Label>
                                <Input {...register("title", { required: true })} placeholder="Enter the title" />

                            </Field.Root>
                            <Field.Root orientation={'horizontal'}>
                                <Field.Label>Deadline</Field.Label>
                                <DeadlinePickerField 
                                name="deadline"
                                label="Pick a date"
                                control={control}/>
                            </Field.Root>
                        </Stack>

                    </Dialog.Body>
                    <Dialog.Footer>
                    <Dialog.ActionTrigger asChild>
                        <Button variant="outline">Cancel</Button>
                    </Dialog.ActionTrigger>
                    <Button type="submit">Save</Button>
                    </Dialog.Footer>
                    <Dialog.CloseTrigger asChild>
                    <CloseButton size="sm" />
                    </Dialog.CloseTrigger>
                </Dialog.Content>
                </Dialog.Positioner>
            </Portal>
        </Dialog.Root>
    );
}

export default CreateMarketButton;