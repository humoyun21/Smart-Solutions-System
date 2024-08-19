import {useEffect, useRef, useState} from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import Grow from "@mui/material/Grow";
import Paper from "@mui/material/Paper";
import Popper from "@mui/material/Popper";
import MenuItem from "@mui/material/MenuItem";
import MenuList from "@mui/material/MenuList";
import Stack from "@mui/material/Stack";
import { Typography } from "@mui/material";

import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";
import TelegramIcon from "@mui/icons-material/Telegram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";

import Logo from "../../assets/images/logo1.svg";
import Logo1 from "../../assets/images/fletcher-building.png";
import Logo2 from "../../assets/images/rbs-group.png";
import Logo3 from "../../assets/images/sailing-it.png";
import Logo4 from "../../assets/images/smart.png";

const data = [
  {
    link: "#",
    images: Logo4,
  },

  {
    link: "#",
    images: Logo3,
  },

  {
    link: "#",
    images: Logo2,
  },

  {
    link: "#",
    images: Logo1,
  },
];

const dataNavbar = [
  {
    title: "Maxsulotlar",
    link: "/maxsulotlar",
  },

  {
    title: "Xizmatlar",
    link: "/xizmatlar",
  },

  {
    title: "Loyihalar",
    link: "/loyihalar",
  },

  {
    title: "Ma'lumotlar",
    link: "/malumotlar",
  },

  {
    title: "Yangiliklar",
    link: "/yangiliklar",
  },

  
];

function Header() {
  const [selectedLanguage, setSelectedLanguage] = useState("Uzbek");
  const [open, setOpen] = useState(false);
  const anchorRef = useRef(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event) {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpen(false);
    } else if (event.key === "Escape") {
      setOpen(false);
    }
  }

  const prevOpen = useRef(open);
  useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);


  ////flag

  const handleLanguageChange = (language) => {
    setSelectedLanguage(language);
    setOpen(false);
  };

  const getFlagUrl = (language) => {
    switch (language) {
      case "Uzbek":
        return "https://upload.wikimedia.org/wikipedia/commons/8/84/Flag_of_Uzbekistan.svg";
      case "Rus":
        return "https://upload.wikimedia.org/wikipedia/en/f/f3/Flag_of_Russia.svg";
      case "English":
        return "https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg";
      default:
        return "https://upload.wikimedia.org/wikipedia/commons/8/84/Flag_of_Uzbekistan.svg";
    }
  };

  return (
    <AppBar 
      sx={{
        
        bgcolor: "#fff",
        boxShadow: "0px 4px 12px -8px rgba(102,102,102,0.46)",
      }}
      position="static"
    >
      <Box
        sx={{
          display: "flex",
          paddingX: 2,
          alignItems: "center",
          justifyContent: "space-between",
          bgcolor: "#F5F5F5",
          paddingTop: "3px",
        }}
      >
        
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {data.map((item, index) => (
            <a
              style={{
                marginLeft: "15px",
              }}
              key={index}
              href={`/${item.link}`}
            >
              <img
                style={{
                  height: "25px",
                  filter:
                    "sepia(500) saturate(500) brightness(0.3) hue-rotate(148deg)",
                  opacity: "0.3",
                }}
                src={item.images}
                alt={index}
              />
            </a>
          ))}
        </Box>

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <a
            style={{
              textDecoration: "none",
              color: "red",
              marginLeft: "15px",
            }}
            href="https://youtube.com/@sss_uz"
          >
            <YouTubeIcon />
          </a>

          <a
            style={{
              textDecoration: "none",
              color: "#E1306C",
              marginLeft: "15px",
            }}
            href="https://www.instagram.com/smartsolutionssystem.uz"
          >
            <InstagramIcon />
          </a>

          <a
            style={{
              textDecoration: "none",
              color: "#316FF6",
              marginLeft: "15px",
            }}
            href="https://www.facebook.com/share/mt1fH3mLM2ZYbgpf/?mibextid=LQQJ4d"
          >
            <FacebookOutlinedIcon />
          </a>

          <a
            style={{
              textDecoration: "none",
              color: "#25D366",
              marginLeft: "15px",
            }}
            href="wa.me/998977734818"
          >
            <WhatsAppIcon />
          </a>

          <a
            style={{
              textDecoration: "none",
              color: "#24A1DE",
              marginLeft: "15px",
            }}
            href="https://t.me/smartsolutions_system"
          >
            <TelegramIcon />
          </a>
        </Box>
      </Box>

      <Box
        sx={{
          padding: 2,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <a
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            textDecoration: "none",
            color: "#4789ad",
          }}
          href="/"
        >
          <img style={{ width: 80 }} src={Logo} alt="Logo" />

          <Typography
            component="h1"
            sx={{
              fontSize: 22,
              fontWeight: "bold",
              color: "#4789ad",
            }}
          >
            Smart Solutions System
          </Typography>
        </a>

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {dataNavbar.map((item, index) => (
            <a
              style={{
                textDecoration: "none",
                color: "#777",
                fontSize: "16px",
                marginLeft: "15px",
                fontWeight: "600",
              }}
              key={index}
              href={item.link}
            >
              {item.title}
            </a>
          ))}

          <Stack direction="row" spacing={2}>


          <div>
      <Button
        ref={anchorRef}
        id="composition-button"
        aria-controls={open ? "composition-menu" : undefined}
        aria-expanded={open ? "true" : undefined}
        aria-haspopup="true"
        onClick={handleToggle}
        sx={{
          marginX: 3,
          color: "#777",
        }}
        variant="outlined"
        startIcon={
          <img
            src={getFlagUrl(selectedLanguage)}
            alt={`${selectedLanguage} flag`}
            style={{ width: "35px", height: "20px" }}
          />
        }
      >
       
      </Button>
      <Popper
        open={open}
        anchorEl={anchorRef.current}
        role={undefined}
        placement="bottom-start"
        transition
        disablePortal
        style={{ zIndex: 1300 }} 
      >
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin:
                placement === "bottom-start"
                  ? "left top"
                  : "left bottom",
            }}
          >
            <Paper>
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList
                  autoFocusItem={open}
                  id="composition-menu"
                  aria-labelledby="composition-button"
                  onKeyDown={handleListKeyDown}
                >
                  <MenuItem onClick={() => handleLanguageChange("Uzbek")}>
                    Uzbek
                  </MenuItem>
                  <MenuItem onClick={() => handleLanguageChange("Rus")}>
                    Rus
                  </MenuItem>
                  <MenuItem onClick={() => handleLanguageChange("English")}>
                    English
                  </MenuItem>
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
          </div>
          </Stack>

          <a
            style={{
              width: "150px",
              height: "40px",
              background: "#019acc",
              color: "#fff",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              textDecoration: "none",
              marginLeft: "20px",
              fontWeight: "bold",
              borderRadius: "2px",
            }}
            href="/aloqa"
          >
            Bog'lanish
          </a>
        </Box>
      </Box>
    </AppBar>
  );
}
export default Header;
