import {
  SegmentedControlItem,
  SegmentedControlRoot,
} from "@/components/segmented-control";

const name = "segmented-control";

const components = ["segmented-control"];

const Component = () => {
  return (
    <SegmentedControlRoot defaultValue="desktop" size={3}>
      <SegmentedControlItem value="mobile">Mobile</SegmentedControlItem>
      <SegmentedControlItem value="tablet">Tablet</SegmentedControlItem>
      <SegmentedControlItem value="desktop">Desktop</SegmentedControlItem>
    </SegmentedControlRoot>
  );
};

export const SegmentedControlDemo = {
  Component,
  components,
  name,
};
