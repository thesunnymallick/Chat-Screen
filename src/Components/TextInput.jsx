import { ImAttachment } from "react-icons/im";
import { AiOutlineSend } from "react-icons/ai";
import Tooltip from "@mui/material/Tooltip";

import { AiOutlineCamera, AiOutlineVideoCamera } from "react-icons/ai";
import { HiOutlineDocumentArrowDown } from "react-icons/hi2";
import { ThemeProvider, createTheme } from "@mui/material";
import { useState } from "react";
import ClickAwayListener from "@mui/material/ClickAwayListener";

const TextInput = () => {
  const [open, setOpen] = useState(false);

  const handleTooltipClose = () => {
    setOpen(false);
  };

  const handleTooltipOpen = () => {
    setOpen(true);
  };

  const theme = createTheme({
    components: {
      MuiTooltip: {
        styleOverrides: {
          tooltip: {
            backgroundColor: "#008000",
            borderRadius: "999px",
          },
          arrow: {
            color: "#008000",
          },
        },
      },
    },
  });

  const toolTipContent = () => {
    return (
      <div className="tooltip">
        <span>
          <AiOutlineCamera />
        </span>
        <span>
          <AiOutlineVideoCamera />
        </span>
        <span>
          <HiOutlineDocumentArrowDown />
        </span>
      </div>
    );
  };
  return (
    <div className="textInput">
      <div>
        <input type="text" placeholder="Reply to @Rohit Yadav" />
        <ClickAwayListener onClickAway={handleTooltipClose}>
          <span>
            <ThemeProvider theme={theme}>
              <Tooltip
                title={toolTipContent()}
                placement="top"
                arrow
                onClose={handleTooltipClose}
                open={open}
                disableFocusListener
                disableHoverListener
                disableTouchListener
              >
                <p>
                  <ImAttachment onClick={handleTooltipOpen} />
                </p>
              </Tooltip>
            </ThemeProvider>

            <p>
              <AiOutlineSend />
            </p>
          </span>
        </ClickAwayListener>
      </div>
    </div>
  );
};

export default TextInput;
