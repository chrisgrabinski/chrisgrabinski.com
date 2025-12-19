import { Card } from "@/components/card";
import { CopyToClipboard } from "@/components/copy-to-clipboard";
import { CountryLabel } from "@/components/country-label";
import {
  DataListItem,
  DataListLabel,
  DataListRoot,
  DataListSub,
  DataListSubContent,
  DataListSubIndicator,
  DataListSubTrigger,
  DataListValue,
} from "@/components/data-list";
import { Filename } from "@/components/filename";
import { Status } from "@/components/status";

const name = "data-list";

const components = [
  "card",
  "country-label",
  "status",
  "copy-to-clipboard",
  "filename",
  "data-list",
];

const Component = () => {
  return (
    <Card className="w-full max-w-md">
      <DataListRoot>
        <DataListItem>
          <DataListLabel>Name</DataListLabel>
          <DataListValue>Peter Parker</DataListValue>
        </DataListItem>
        <DataListItem>
          <DataListLabel>Onboarding status</DataListLabel>
          <DataListValue>
            <Status severity={1}>Onboarded</Status>
          </DataListValue>
        </DataListItem>
        <DataListItem>
          <DataListLabel>Contract</DataListLabel>
          <DataListValue>
            <CopyToClipboard>
              <Filename>
                peter_parker_united_states_employment_contract.pdf
              </Filename>
            </CopyToClipboard>
          </DataListValue>
        </DataListItem>
        <DataListItem>
          <DataListLabel>Email</DataListLabel>
          <DataListValue>
            <CopyToClipboard>mail@example.com</CopyToClipboard>
          </DataListValue>
        </DataListItem>
        <DataListItem>
          <DataListLabel>Country</DataListLabel>
          <DataListValue>
            <CountryLabel code="US" />
          </DataListValue>
        </DataListItem>
        <DataListSub>
          <DataListSubTrigger>
            Address
            <DataListSubIndicator />
          </DataListSubTrigger>
          <DataListSubContent>
            <DataListRoot>
              <DataListItem>
                <DataListLabel>Street</DataListLabel>
                <DataListValue>410 Chelsea Street</DataListValue>
              </DataListItem>
              <DataListItem>
                <DataListLabel>City</DataListLabel>
                <DataListValue>New York, NY</DataListValue>
              </DataListItem>
              <DataListItem>
                <DataListLabel>Zip</DataListLabel>
                <DataListValue>10001</DataListValue>
              </DataListItem>
            </DataListRoot>
          </DataListSubContent>
        </DataListSub>
        <DataListItem>
          <DataListLabel>Profession</DataListLabel>
          <DataListValue>Photographer</DataListValue>
        </DataListItem>
      </DataListRoot>
    </Card>
  );
};

export const DataListDemo = {
  Component,
  components,
  name,
};
