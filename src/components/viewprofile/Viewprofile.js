import React, { useState } from "react";

import Divider from "@mui/material/Divider";
import "./viewprofile.css";

import { Avatar, Link } from "@mui/material";
import AvatarGroup from "@mui/material/AvatarGroup";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

import People from "../people/People";
import Organisation from "../organisation/Organisation";

function Viewprofile() {
  const [btnType, setbtnType] = useState(true);
  return (
    <div className="viewprofile">
      <div className="viewprofile_left">
        <div className="viewprofile_left1">
          <img
            className="profile_bgimg"
            src="https://thingscareerrelated.files.wordpress.com/2021/10/default-background-image.png"
            alt=""
          />
          <Avatar
            className="profile_avatar"
            src="https://pbs.twimg.com/media/ERGiVgLXsAACI6l.jpg"
            alt=""
          />
          <div className="profile_basic_details ">
            <div className="profile_basicleft1">
              <Typography variant="h5" gutterBottom component="div">
                Samantha
              </Typography>
              <Typography variant="body1" gutterBottom>
                React js developer with 3 years experience, Serving notice
                period L.W.D 25 th Feb
              </Typography>
              <Typography variant="body2" color="gray" gutterBottom>
                West Godavari, Andhra Pradesh, India.
                <Link className="contact">Contact info</Link>
              </Typography>
              <Typography variant="body2" color="gray" gutterBottom>
                205 followers <Link className="contact">204 connections</Link>
              </Typography>
              <div className="mutual">
                <AvatarGroup size="small" max={2}>
                  <Avatar alt="Remy Sharp" src="" />
                  <Avatar alt="Travis Howard" src="" />
                </AvatarGroup>
                <Link>
                  <Typography variant="body1" color="gray" gutterBottom>
                    53 mutual connections. Pooja Hegde, Anushka sharma and 51
                    others
                  </Typography>
                </Link>
              </div>
              <button className="basic_button1">
                <Typography variant="body2">Message</Typography>
              </button>
              <button className="basic_button2">
                <Typography variant="body2">More</Typography>
              </button>
            </div>

            <div className="profile_basicright">
              <div className="profile_basicright_sub">
                <img
                  className="profile_basicright_image"
                  src="https://media-exp1.licdn.com/dms/image/C4E0BAQEMvQ8E6gXSPA/company-logo_100_100/0/1625820626997?e=1649894400&v=beta&t=9lioRWj7IUCKpcshHn5RKo1Q0q7Q9URMF_jxQjK0aV0"
                  alt=""
                />
                <Typography variant="subtitle2">
                  Tata Consultancy Services
                </Typography>
              </div>
              <div className="profile_basicright_sub">
                <img
                  className="profile_basicright_image"
                  src="https://thingscareerrelated.files.wordpress.com/2021/10/default-background-image.png"
                  alt=""
                />
                <Typography variant="subtitle2">
                  PRASAD V POTLURI SIDDHARTHA INSTITUTE OF TECHNOLOGY
                </Typography>
              </div>
            </div>
          </div>
        </div>
        <div className="viewprofile_left2">
          <div className="viewprofile_left2_about">
            <Typography variant="body1" gutterBottom>
              About
            </Typography>
            <Typography variant="subtitle2" color="gray">
              Experienced Design Engineer with a demonstrated history of working
              in the semiconductors industry. Skilled in developing CAD Frontend
              Build tools on distributed computing resources, Development of ML
              models for solving repetitive problems with good amount of
              historic data in place, Deployment of ML models on Azure, AWS
              environment with Django Server. Strong engineering professional
              graduated from PVP Siddhartha Institute Of Technology.
            </Typography>
          </div>
        </div>
        <div className="viewprofile_left3">
          <div className="viewprofile_left3_content">
            <Typography variant="body1" gutterBottom>
              Experience
            </Typography>
            <Organisation
              img="https://media-exp1.licdn.com/dms/image/C4E0BAQFV8sP_ro__mA/company-logo_100_100/0/1565392341235?e=1649894400&v=beta&t=l8OYDtjF6kKsxkQsCgYewGnvy8P1U5I5c_9nbCBaEkY"
              role="Software Engineer"
              company="AMD . Full-time"
              exp="May 2018 - Jul 2019, 1 yr 3mos"
            />
            <Organisation
              img="https://media-exp1.licdn.com/dms/image/C4D0BAQFWzOAVgGjUUA/company-logo_100_100/0/1641979388362?e=1650499200&v=beta&t=M1srwGTCOib2k3_po1GhIeUllMisaesx-gJTsYQo8z8"
              role="Software Engineer"
              company="Capgemini . Full-time"
              exp="May 2017 - Jul 2018, 1 yr 3mos"
            />
            <Divider />
            <Typography className="field" variant="body1" gutterBottom>
              Education
            </Typography>
            <Organisation
              img="https://thingscareerrelated.files.wordpress.com/2021/10/default-background-image.png"
              role="PRASAD V POTLURI SIDDARTHA"
              company="Bachelor of Technology- Btech Computerscience"
              exp="2014-2018"
            />
          </div>
        </div>
      </div>

      <div className="viewprofile_right">
        <div className="viewprofile_right_top1">
          <div className="explore_jobs">
            <Avatar
              className="explore_avatar"
              src="https://pbs.twimg.com/media/ERGiVgLXsAACI6l.jpg"
              alt=""
            />
            <img
              className="explore_image"
              src="https://media-exp1.licdn.com/dms/image/C4E0BAQFV8sP_ro__mA/company-logo_100_100/0/1565392341235?e=1649894400&v=beta&t=l8OYDtjF6kKsxkQsCgYewGnvy8P1U5I5c_9nbCBaEkY"
              alt=""
            />
          </div>
          <div className="explore_content">
            <Typography
              className="exp_content"
              variant="body2"
              color="gray"
              gutterBottom
            >
              Balaraju, explore jobs at AMD that match your skills
            </Typography>
            <button className="explore_button2">See jobs</button>
          </div>
        </div>
        <div className="viewprofile_right_top2">
          <Typography
            className="viewed_people_msg"
            variant="subtitle2"
            color="gray"
            gutterBottom
          >
            People also viewed
          </Typography>
          {btnType ? (
            <>
              <People
                name="Kajal Aggarwal"
                avatar="https://upload.wikimedia.org/wikipedia/commons/e/e2/Kajal_Aggarwal_on_the_sets_of_Queen_Kannada_remake.jpg"
                designation="Tollywood actress"
                btnName="Connect"
              />
              <People
                name="Pooja Hegde"
                avatar="https://akm-img-a-in.tosshub.com/indiatoday/images/story/202107/Pooja-Hegde-India-Today-review_0_1200x768.jpeg?ecc1Xkl6Pkk5Pa1cgZPrpeF1Umi0mgiu&size=1200:675"
                designation="Tollywood actress"
                btnName="Connect"
              />
              <People
                name="Krithi Shetty"
                avatar="https://www.pinkvilla.com/files/styles/amp_metadata_content_image/public/krithi_shetty_birthday_wishes_1.jpg"
                designation="Tollywood actress"
                btnName="Connect"
              />
              <People
                name="Jennipher Lopez"
                avatar="https://m.media-amazon.com/images/M/MV5BMTY0OTY3ODA3OV5BMl5BanBnXkFtZTcwMzMyMzQ1NQ@@._V1_.jpg"
                designation="Pop Star"
                btnName="Connect"
              />
              <People
                name="Britney spears"
                avatar="https://upload.wikimedia.org/wikipedia/commons/d/da/Britney_Spears_2013_%28Straighten_Crop%29.jpg"
                designation="Pop Star"
                btnName="Connect"
              />
              <People
                name="Dakota Johnson"
                avatar="https://m.media-amazon.com/images/M/MV5BMzViNDRlMGUtOWRiYi00MDBhLTk1ODgtNzQzNGVkOWUyZTQzXkEyXkFqcGdeQWpnYW1i._V1_UX477_CR0,0,477,268_AL_.jpg"
                designation="American actress"
                btnName="Connect"
              />
              <People
                name="Deepika Padukone"
                avatar="https://images.livemint.com/img/2021/06/30/1600x900/PTI05_04_2021_000231B_1625075432065_1625075474639.jpg"
                designation="Actresss"
                btnName="Connect"
              />
              <People
                name="Kristen Stewart"
                avatar="https://media.vanityfair.com/photos/5f6b7629ffc33aecb21a23df/9:16/w_746,h_1327,c_limit/kristen.jpg"
                designation="Actress"
                btnName="Connect"
              />
              <Button
                className="view_btn"
                endIcon={<KeyboardArrowUpIcon />}
                onClick={() => setbtnType(false)}
              >
                Show less
              </Button>
            </>
          ) : (
            <>
              <People
                name="Kristen Stewart"
                avatar="https://media.vanityfair.com/photos/5f6b7629ffc33aecb21a23df/9:16/w_746,h_1327,c_limit/kristen.jpg"
                designation="Actress"
                btnName="Connect"
              />
              <Button
                className="view_btn"
                onClick={() => setbtnType(true)}
                endIcon={<KeyboardArrowDownIcon />}
              >
                Show more
              </Button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Viewprofile;
