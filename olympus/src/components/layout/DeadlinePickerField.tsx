import {
    Box,
    Text,
    Button,
    Popover,
    PopoverContent,
    PopoverTrigger,
    ButtonGroup,
  } from "@chakra-ui/react";
  import { LuCalendar } from "react-icons/lu";
  import { Controller, Control, FieldValues, Path } from "react-hook-form";
  import Calendar from "react-calendar";
  import "react-calendar/dist/Calendar.css";
  import { format } from "date-fns";
  
  type DeadlinePickerFieldProps<T extends FieldValues> = {
    name: Path<T>;
    label: string;
    control: Control<T>;
  };
  
const DeadlinePickerField = <T extends FieldValues>({ name, label, control }: DeadlinePickerFieldProps<T>) => {
    const defaultDate = new Date();
    defaultDate.setDate(defaultDate.getDate() + 7);
  
    return (
      <Box>
        <Text fontWeight="bold" mb={2}>{label}</Text>
        <Controller
          name={name}
          control={control}
          render={({ field }) => (
            <Popover.Root>
              <PopoverTrigger>

                <ButtonGroup>
                    <Button
                    variant="outline"
                    width="100%"
                    justifyContent="space-between"
                    >
                    {field.value ? format(field.value, "yyyy-MM-dd") : "Select a date"}
                    </Button>
                    <LuCalendar />
                </ButtonGroup>
                
              </PopoverTrigger>
              <PopoverContent>
                <Box p={2}>
                  <Calendar
                    onChange={(date) => field.onChange(date)}
                    value={field.value}
                  />
                </Box>
              </PopoverContent>
            </Popover.Root>
          )}
        />
      </Box>
    );
}


export default DeadlinePickerField;