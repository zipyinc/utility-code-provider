//@ts-ignore
import { Backdrop } from "@mui/material";
import Dialog, { DialogProps } from "@mui/material/Dialog";
import * as React from "react";
import { CopyBlock, dracula } from "react-code-blocks";
import Dropdown from "../dropdown/dropdown";
import Tryit from "../tryit/tryit";
import "./codepan.css";

export default function MaxWidthDialog(props: any) {
  const data: { name: string, extention: string }[] = [{ name: "Java", extention: "java" }, { name: "Python", extention: "py" }, { name: "JavaScript", extention: "js" }, { name: "Golang", extention: "go" }];
  const [maxWidth] = React.useState<DialogProps["maxWidth"]>("xl");
  const [selectedValue, setSelectedValue] = React.useState(data[0]);
  const methodValue = props.methodValue;

  const handleDropdownChange = (value: any) => {
    setSelectedValue(value);
  };

  return (
    <React.Fragment>
      <Dialog
        fullWidth={true}
        maxWidth={maxWidth}
        open={props.open}
        BackdropComponent={Backdrop}
        BackdropProps={{ className: "blur" }}
        onClose={props.handleClose}
      >
        <div className="codepan">
          <div className="codepan-left">
            <div className="content">
              <div className="title">{methodValue?.Name}</div>
              <div className="description">
                {methodValue?.Description}
              </div>
              <div className="try-section">
                {/* <Tryit/> */}
              </div>
            </div>
          </div>
          <div className="codepan-right">
            <div className="codepan-right-head">
              <div className="head-left">
                <span>utility.{selectedValue.extention}</span>
              </div>
              <div className="head-right">
                <Dropdown
                  data={data}
                  dataKey="name"
                  onChange={handleDropdownChange}
                  error={""}
                  value={selectedValue.name}
                />
              </div>
            </div>
            <div className="codepan-right-body">
              <div
                className="code-bock"
                style={{ fontFamily: "IBM Plex Mono" }}
              >

                <CopyBlock
                  text={methodValue?.Code[selectedValue.extention]}
                  showLineNumbers
                  codeBlock
                  language={selectedValue.extention}
                  theme={dracula}
                />
              </div>
            </div>
          </div>
        </div>
      </Dialog>
    </React.Fragment>
  );
}
