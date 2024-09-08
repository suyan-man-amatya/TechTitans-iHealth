import { DatePicker, DatesProvider } from "@mantine/dates";
import React from "react";

function Calender() {
  return (
    <DatesProvider settings={{ consistentWeeks: true }}>
      <DatePicker />
    </DatesProvider>
  );
}
export default Calender;
