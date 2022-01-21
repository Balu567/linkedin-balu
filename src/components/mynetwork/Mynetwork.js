import React, { useState } from "react";
import "./mynetwork.css";

import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import ContactsIcon from "@mui/icons-material/Contacts";
import EmojiPeopleIcon from "@mui/icons-material/EmojiPeople";
import GroupsIcon from "@mui/icons-material/Groups";
import TodayIcon from "@mui/icons-material/Today";
import ArticleIcon from "@mui/icons-material/Article";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import TagIcon from "@mui/icons-material/Tag";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

import Button from "@mui/material/Button";
import Profilecard from "../profilecard/Profilecard";

function Mynetwork() {
  const [btnType, setbtnType] = useState(true);

  const recentType = (icon, type, number) => {
    return (
      <div className="leftcard_recentItem">
        <span className="leftcard_icon">
          {icon}
          <span className="type_info">{type}</span>
        </span>

        <p className="type_number">{number}</p>
      </div>
    );
  };

  return (
    <div className="mynetwork">
      <div className="leftCard">
        <div className="network_content">
          <h4>Manage my network</h4>

          {btnType ? (
            <>
              {recentType(<PeopleAltIcon />, "Connections", 88)}
              {recentType(<ContactsIcon />, "Contacts", 586)}
              {recentType(<EmojiPeopleIcon />, "People|Follow", 1)}
              {recentType(<GroupsIcon />, "Groups")}
              {recentType(<TodayIcon />, "Events", 1)}
              {recentType(<ArticleIcon />, "Pages", 1)}
              {recentType(<NewspaperIcon />, "NewsLetter", 1)}
              {recentType(<TagIcon />, "Hashtags", 1)}
              <Button
                className="lefttop_button"
                endIcon={<KeyboardArrowUpIcon />}
                onClick={() => setbtnType(false)}
              >
                Show less
              </Button>
            </>
          ) : (
            <>
              {recentType(<PeopleAltIcon />, "Connections", 88)}
              <Button
                className="lefttop_button"
                endIcon={<KeyboardArrowDownIcon />}
                onClick={() => setbtnType(true)}
              >
                Show more
              </Button>
            </>
          )}
          <div className="leftdown">
            <img
              src="https://static-exp1.licdn.com/scds/common/u/images/promo/ads/li_evergreen_jobs_ad_300x250_v1.jpg"
              alt=""
            />
            <p className="leftdown__p">Add personal contacts</p>
            <h6>
              We’ll periodically import and store your contacts to help you and
              others connect. You choose who to connect to and who to invite.
            </h6>
            <input
              className="leftdown_input"
              type="text"
              value="balarajumalla.9@gmail.com"
              placeholder="Your email address"
            />
            <br />
            <div className="leftdown_button">
              <Button>Continue</Button>
            </div>
            <p className="leftdown_p">More options</p>
          </div>
        </div>
      </div>
      <div className="rightSection">
        <div className="righttop_section">
          <h4>No Pending Invitations</h4>
          <div className="righttop_button">
            <Button>Manage</Button>
          </div>
        </div>
        <div className="rightbottom_section">
          <div className="top_rightbottom">
            <h4>Industry leaders in India you may know</h4>
            <div className="righttop_button">
              <Button>See All</Button>
            </div>
          </div>
          <div className="profilecards_section">
            <Profilecard
              name="Kajal Aggarwal"
              img="https://images.fastcompany.net/image/upload/w_596,c_limit,q_auto:best,f_auto/wp-cms/uploads/2021/03/LinkedIn-Default-Background-2020-.jpg"
              avatar="https://upload.wikimedia.org/wikipedia/commons/e/e2/Kajal_Aggarwal_on_the_sets_of_Queen_Kannada_remake.jpg"
              designation="Tollywood actress"
              connection="Based on your profile"
            />
            <Profilecard
              name="Pooja Hegde"
              img="https://images.fastcompany.net/image/upload/w_596,c_limit,q_auto:best,f_auto/wp-cms/uploads/2021/03/LinkedIn-Default-Background-2020-.jpg"
              avatar="https://akm-img-a-in.tosshub.com/indiatoday/images/story/202107/Pooja-Hegde-India-Today-review_0_1200x768.jpeg?ecc1Xkl6Pkk5Pa1cgZPrpeF1Umi0mgiu&size=1200:675"
              designation="Tollywood actress"
              connection="Based on your profile"
            />
            <Profilecard
              name="Krithi Shetty"
              img="https://images.fastcompany.net/image/upload/w_596,c_limit,q_auto:best,f_auto/wp-cms/uploads/2021/03/LinkedIn-Default-Background-2020-.jpg"
              avatar="https://www.pinkvilla.com/files/styles/amp_metadata_content_image/public/krithi_shetty_birthday_wishes_1.jpg"
              designation="Tollywood actress"
              connection="Based on your profile"
            />
            <Profilecard
              name="Samantha"
              img="https://images.fastcompany.net/image/upload/w_596,c_limit,q_auto:best,f_auto/wp-cms/uploads/2021/03/LinkedIn-Default-Background-2020-.jpg"
              avatar="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Samantha_At_The_Irumbu_Thirai_Trailer_Launch.jpg/1200px-Samantha_At_The_Irumbu_Thirai_Trailer_Launch.jpg"
              designation="Tollywood actress"
              connection="Based on your profile"
            />
            <Profilecard
              name="Jennipher Lopez"
              img="https://images.fastcompany.net/image/upload/w_596,c_limit,q_auto:best,f_auto/wp-cms/uploads/2021/03/LinkedIn-Default-Background-2020-.jpg"
              avatar="https://m.media-amazon.com/images/M/MV5BMTY0OTY3ODA3OV5BMl5BanBnXkFtZTcwMzMyMzQ1NQ@@._V1_.jpg"
              designation="Pop Star"
              connection="Based on your profile"
            />
            <Profilecard
              name="Britney spears"
              img="https://images.fastcompany.net/image/upload/w_596,c_limit,q_auto:best,f_auto/wp-cms/uploads/2021/03/LinkedIn-Default-Background-2020-.jpg"
              avatar="https://upload.wikimedia.org/wikipedia/commons/d/da/Britney_Spears_2013_%28Straighten_Crop%29.jpg"
              designation="Pop Star"
              connection="Based on your profile"
            />
            <Profilecard
              name="Dakota Johnson"
              img="https://images.fastcompany.net/image/upload/w_596,c_limit,q_auto:best,f_auto/wp-cms/uploads/2021/03/LinkedIn-Default-Background-2020-.jpg"
              avatar="https://m.media-amazon.com/images/M/MV5BMzViNDRlMGUtOWRiYi00MDBhLTk1ODgtNzQzNGVkOWUyZTQzXkEyXkFqcGdeQWpnYW1i._V1_UX477_CR0,0,477,268_AL_.jpg"
              designation="American actress"
              connection="Based on your profile"
            />
            <Profilecard
              name="Deepika Padukone"
              img="https://images.fastcompany.net/image/upload/w_596,c_limit,q_auto:best,f_auto/wp-cms/uploads/2021/03/LinkedIn-Default-Background-2020-.jpg"
              avatar="https://images.livemint.com/img/2021/06/30/1600x900/PTI05_04_2021_000231B_1625075432065_1625075474639.jpg"
              designation="Actresss"
              connection="Based on your profile"
            />
            <Profilecard
              name="Kristen Stewart"
              img="https://images.fastcompany.net/image/upload/w_596,c_limit,q_auto:best,f_auto/wp-cms/uploads/2021/03/LinkedIn-Default-Background-2020-.jpg"
              avatar="https://media.vanityfair.com/photos/5f6b7629ffc33aecb21a23df/9:16/w_746,h_1327,c_limit/kristen.jpg"
              designation="Actress"
              connection="Based on your profile"
            />
            <Profilecard
              name="AlexandraDaddario"
              img="https://images.fastcompany.net/image/upload/w_596,c_limit,q_auto:best,f_auto/wp-cms/uploads/2021/03/LinkedIn-Default-Background-2020-.jpg"
              avatar="https://i.pinimg.com/736x/c3/84/34/c3843490be9ede329976eef51a9c9727.jpg"
              designation="Actress"
              connection="Based on your profile"
            />
            <Profilecard
              name="Emma Watson"
              img="https://images.fastcompany.net/image/upload/w_596,c_limit,q_auto:best,f_auto/wp-cms/uploads/2021/03/LinkedIn-Default-Background-2020-.jpg"
              avatar="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTdR8EBtqfxKIj8-vazEROe6JEkpca-oJMaesCzmF3tni5KbwaW"
              designation="Actress"
              connection="Based on your profile"
            />
            <Profilecard
              name="Angelina Jolie"
              img="https://images.fastcompany.net/image/upload/w_596,c_limit,q_auto:best,f_auto/wp-cms/uploads/2021/03/LinkedIn-Default-Background-2020-.jpg"
              avatar="https://upload.wikimedia.org/wikipedia/commons/a/ad/Angelina_Jolie_2_June_2014_%28cropped%29.jpg"
              designation="Hollywood Angel"
              connection="Based on your profile"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Mynetwork;
