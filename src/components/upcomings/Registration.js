import React, { useState } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
  Grid,
  IconButton,
  Typography,
  CircularProgress,
} from "@mui/material";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import TextareaAutosize from "@mui/base/TextareaAutosize";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import blog_1 from "../images/blog_1.jpeg";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { useMediaQuery } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import payment_23 from "../images/payment_23.jpg";
import { fill } from "@cloudinary/url-gen/actions/resize";
import Cloudinary from "@cloudinary/url-gen";
import { image } from "@cloudinary/url-gen/qualifiers/source";
import axios from "axios";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert, { AlertProps } from "@mui/material/Alert";
const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const subEventClubs = [
  {
    id: 1,
    Event: "FIVE FEET DROP (OPEN MIC)",
    Rules: (
      <>
        <ul style={{ paddingLeft: "16px", marginTop: "10px" }}>
          <li>
            <strong style={{ color: "yellow" }}>Registration Fee :</strong> Rs
            100 /-
          </li>
        </ul>
        Step into the limelight and share your voice with the world in our
        electrifying open mic event, FIVE FEET DROP which celebrates the power
        of creativity and self-expression.
        <ol style={{ paddingLeft: "16px", marginTop: "10px" }}>
          <li>
            Each participant will be allowed to speak for 4 minutes with 30-sec
            additional time.
          </li>
          <li>
            Participants need to present their self-written Poem, Story,
            Shayari, or stand-up comedy. The use of props and background music
            is not allowed.
          </li>
          <li>
            Participants will be judged based on content and presentation.
          </li>
          <li>
            Participants shall be straight away disqualified for using abusive
            language and plagiarised content.
          </li>
          <li>Winners will be declared on the day of the event.</li>
          <li>
            The decision of the judges is final and binding on all participants.
          </li>
        </ol>
      </>
    ),
    poc: "SRABASTI BANERJEE [ 7718651718 ]",
    amt: 100,
  },
  {
    id: 1,
    Event: "DISPUTATIO (DEBATE)",
    Rules: (
      <>
        <ul style={{ paddingLeft: "16px", marginTop: "10px" }}>
          <li>
            <strong style={{ color: "yellow" }}>Registration Fee :</strong> Rs
            100 /-
          </li>
        </ul>
        The air crackles with intellectual energy as passionate minds collide
        and opposing viewpoints clash in our high-stakes debate event,
        DISPUTATIO.
        <Typography
          variant="body2"
          color="textSecondary"
          style={{ color: "rgb(224, 133, 21)", paddingLeft: "16px" }}
        >
          GENERAL RULES
        </Typography>
        <ol style={{ paddingLeft: "16px" }}>
          <li>
            At the end of the allotted time for the speech, the speaker must
            relieve the mic to the moderator. Not respecting the warning buzzer
            will lead to a score deduction.
          </li>
          <li>
            No abusive language/slang/colloquialisms will be tolerated. Personal
            attacks will not be tolerated as well.
          </li>
        </ol>
        <Typography
          variant="body2"
          color="textSecondary"
          style={{
            color: "rgb(224, 133, 21)",
            paddingLeft: "16px",
            marginTop: "10px",
          }}
        >
          PRELIMS
        </Typography>
        <ol style={{ paddingLeft: "16px" }}>
          <li>
            The prelims would be held in Turncoat format. Every speaker will be
            required to switch their stance in the middle as and when instructed
            by the moderator.
          </li>
          <li>The topic for the prelims will be declared beforehand.</li>
          <li>
            Each speaker will get 3 minutes to present in the prelims. A warning
            bell will be sounded at the 2-minute 30-second mark. The speech
            would be followed by a single rebuttal question that will be put
            forward by the moderator.
          </li>
          <li>
            The top participants from the prelims would proceed to the finals.
          </li>
        </ol>
        <Typography
          variant="body2"
          color="textSecondary"
          style={{
            color: "rgb(224, 133, 21)",
            paddingLeft: "16px",
            marginTop: "10px",
          }}
        >
          FINALS
        </Typography>
        <ol style={{ paddingLeft: "16px" }}>
          <li>
            The finals would be face-off rounds between the speakers who qualify
            for the prelims. The speakers would be competing against each other
            one-on-one in an improvised Lincoln-Douglas Format.
          </li>
          <li>
            The topics for the finals would be revealed on-spot. The speakers
            will be given a preparation time of 30 minutes before the finals.
          </li>
        </ol>
      </>
    ),
    amt: 100,
    poc: "VISHAL JHA,SUMIT CHATTERJEE [ 7004200029, 7602900000]",
  },
  {
    id: 1,
    Event: "SPOTLIGHT (DRAMA)",
    Rules: (
      <>
        <ul style={{ paddingLeft: "16px", marginTop: "10px" }}>
          <li>
            <strong style={{ color: "yellow" }}>Registration Fee :</strong> Rs
            400 per Team /-
          </li>
        </ul>
        From heart-wrenching monologues to thrilling plot twists, our drama
        event, SPOTLIGHT will be a rollercoaster of emotions that will leave you
        on the edge of your seat.
        <Typography
          variant="body2"
          color="textSecondary"
          style={{
            color: "rgb(224, 133, 21)",
            paddingLeft: "16px",
            marginTop: "10px",
          }}
        >
          Prelims Round
        </Typography>
        <ol style={{ paddingLeft: "16px" }}>
          <li>
            This will be an online round. A group can have a maximum of 7
            people.
          </li>
          <li>
            The team captain of the group needs to register on our
            website(Suppose X, Y, and Z are performing. In the name section
            write it as X+Y+Z. For the rest of the details put a comma and fill
            it up.)
          </li>
          <li>
            Participants/groups have to create a 10-15-minute video and send it
            to us through a link provided by Team Eclectica.
          </li>
          <li>
            The theme for the prelims is “BREAKING FREE” in which the
            participants/groups are required to create and perform an original
            drama or enact an already composed piece.
          </li>
          <li>
            Extra points for originality and creativity will be given. Therefore
            it is encouraged to perform an original act.
          </li>
          <li>The performance can be in Hindi, Bengali, or English.</li>
          <li>The top teams will qualify for the final round.</li>
        </ol>
        <Typography
          variant="body2"
          color="textSecondary"
          style={{
            color: "rgb(224, 133, 21)",
            paddingLeft: "16px",
            marginTop: "10px",
          }}
        >
          Final Round
        </Typography>
        <ol style={{ paddingLeft: "16px" }}>
          <li>
            This will be an in-house round, and participants can perform
            anything of their choice. There will be no barrier to a theme.
          </li>
          <li>The performance should be 15-20 mins.</li>
          <li>
            Street play is prohibited. The teams/participants will be presented
            with a stage to perform their acts.
          </li>
          <li>The performance can be in Hindi, Bengali, or English.</li>
          <li>Originality will be favored. Be creative and good luck!</li>
        </ol>
      </>
    ),
    poc: "ASHISH KASHYAP [ 9001360763 ]",
    amt: 400,
  },
  {
    id: 1,
    Event: "INQUIZITIVE INDIA (solo) ",
    Rules: (
      <>
        <ul style={{ paddingLeft: "16px", marginTop: "10px" }}>
          <li>
            <strong style={{ color: "yellow" }}>Registration Fee :</strong> Rs
            60 /-
          </li>
        </ul>
        Our India-themed quiz event, INQUIZITIVE INDIA will transport you
        through time and space as you explore the rich cultural heritage and
        diverse traditions of this incredible country. Rules are as follows :
        <ol style={{ paddingLeft: "16px" }}>
          <li>Open only to participants under 25</li>
          <li>
            Teams of 2 members allowed. Lone wolves(1 member teams) are also
            allowed.
          </li>
          <li>Quiz based on various aspects of India</li>
          <li> An initial preliminary round followed by the finals. </li>
          <li>Top 8 teams from prelims will qualify for the finals</li>
          <li>Cross college teams are also allowed</li>
        </ol>
      </>
    ),
    poc: "RITAM ROY, SUPRATICK GHOSH [ 8918503441, 9903473558 ]",
    amt: 60,
  },
  {
    id: 1,
    Event: "INQUIZITIVE INDIA (Duo) ",
    Rules: (
      <>
        <ul style={{ paddingLeft: "16px", marginTop: "10px" }}>
          <li>
            <strong style={{ color: "yellow" }}>Registration Fee :</strong> Rs
            100 /-
          </li>
        </ul>
        Our India-themed quiz event, INQUIZITIVE INDIA will transport you
        through time and space as you explore the rich cultural heritage and
        diverse traditions of this incredible country. Rules are as follows :
        <ol style={{ paddingLeft: "16px" }}>
          <li>
            Only the team captain should register. If X and Y are participating,
            then the name should be written as (X+Y). For the rest of the boxes
            give a comma and fill in the details.
          </li>
          <li>Open only to participants under 25</li>
          <li>
            Teams of 2 members allowed. Lone wolves(1 member teams) are also
            allowed.
          </li>
          <li>Quiz based on various aspects of India</li>
          <li> An initial preliminary round followed by the finals. </li>
          <li>Top 8 teams from prelims will qualify for the finals</li>
          <li>Cross college teams are also allowed</li>
        </ol>
      </>
    ),
    poc: "RITAM ROY, SUPRATICK GHOSH [ 8918503441, 9903473558 ]",
    amt: 100,
  },
  {
    id: 1,
    Event: "OPEN GENERAL QUIZ (solo)",
    Rules: (
      <>
        <ul style={{ paddingLeft: "16px", marginTop: "10px" }}>
          <li>
            <strong style={{ color: "yellow" }}>Registration Fee :</strong> Rs
            70 /-
          </li>
        </ul>
        The open general quiz event is a battle of wits where quick thinking and
        a vast knowledge base will help you emerge victorious in this ultimate
        test of trivia. Rules are as follows :
        <ol style={{ paddingLeft: "16px" }}>
          <li>It will be an Open General Quiz covering all topics</li>
          <li>
            Teams of 2 members are allowed(Teams of 1 member are also allowed).
          </li>
          <li>Participation is open to all.</li>
          <li>An initial preliminary round will be followed by the finals. </li>
          <li>Top 8 teams from prelims will qualify for the finals</li>
          <li>Cross-college teams are also allowed.</li>
        </ol>
      </>
    ),
    poc: "SHOUNAK BASU [ 8927968912 ]",
    amt: 70,
  },
  {
    id: 1,
    Event: "OPEN GENERAL QUIZ (duo)",
    Rules: (
      <>
        <ul style={{ paddingLeft: "16px", marginTop: "10px" }}>
          <li>
            <strong style={{ color: "yellow" }}>Registration Fee :</strong> Rs
            120 /-
          </li>
        </ul>
        The open general quiz event is a battle of wits where quick thinking and
        a vast knowledge base will help you emerge victorious in this ultimate
        test of trivia. Rules are as follows :
        <ol style={{ paddingLeft: "16px" }}>
          <li>
            Only the team captain should register. If X and Y are participating,
            then the name should be written as (X+Y). For the rest of the boxes
            give a comma and fill in the details.
          </li>
          <li>It will be an Open General Quiz covering all topics</li>
          <li>
            Teams of 2 members are allowed(Teams of 1 member are also allowed).
          </li>
          <li>Participation is open to all.</li>
          <li>An initial preliminary round will be followed by the finals. </li>
          <li>Top 8 teams from prelims will qualify for the finals</li>
          <li>Cross-college teams are also allowed.</li>
        </ol>
      </>
    ),
    poc: "SHOUNAK BASU [ 8927968912 ]",
    amt: 120,
  },
  {
    id: 1,
    Event: "BITS AND PIECES(SHORT STORY)",
    Rules: (
      <>
        <ul style={{ paddingLeft: "16px", marginTop: "10px" }}>
          <li>
            <strong style={{ color: "yellow" }}>Registration Fee :</strong> Rs
            60 /-
          </li>
        </ul>
        Unlock your imagination and let your creativity soar as you weave a tale
        from just three given words at our event, BITS AND PIECES.
        <ol style={{ paddingLeft: "16px" }}>
          <li>
            {" "}
            Participants will be given three words on-spot on which their
            content should be based.
          </li>
          <li>
            The content must properly reflect the emotional value of the words,
            not just the usage of them in the writing.
          </li>
          <li> Plagiarism from any online resource will be penalized.</li>
          <li>
            Seeking online help for understanding and initial progress is
            accepted.{" "}
          </li>
          <li>The content should be in Hindi, Bengali, or English.</li>
          <li>The word limit for the event is 70 words</li>
          <li>
            {" "}
            The participants will be given a time frame of 25 minutes to write
            their pieces.
          </li>
          <li>Only one entry will be allowed per person.</li>
        </ol>
      </>
    ),
    poc: "ELEEN DAS, HARSH PRATIK [ 8371983168, 8340600456 ]",
    amt: 60,
  },
  {
    id: 1,
    Event: "IMAGE-iNATION (PICTURE STORY)",
    Rules: (
      <>
        <ul style={{ paddingLeft: "16px", marginTop: "10px" }}>
          <li>
            <strong style={{ color: "yellow" }}>Registration Fee :</strong> Rs
            60 /-
          </li>
        </ul>
        A picture is worth a thousand words, and in our event IMAGE-iNATION, you
        will have the chance to bring it to life through your unique
        storytelling.
        <ol style={{ paddingLeft: "16px" }}>
          <li>
            Participants must base their prose/poetry on the given picture. The
            submission should be relevant to its theme or intended message.
          </li>
          <li>Participants may write in Hindi, English, or Bengali.</li>
          <li> The word limit is 300.</li>
          <li>The participants will get 1 hour to write their pieces.</li>
          <li>Only one entry will be accepted per participant.</li>
          <li>
            Plagiarism will not be tolerated. Any detection of plagiarised
            content will result in disqualification.
          </li>
          <li>
            Participants will be judged based on their content and relevance to
            the picture. The decision of the judges is final and binding on all
            participants.
          </li>
        </ol>
      </>
    ),
    poc: "ELEEN DAS, SRABASTI BANERJEE [8371983168, 7718651718]",
    amt: 60,
  },
  {
    id: 1,
    Event: "BITS AND PIECES + PROSIMETRUM + IMAGE-iNATION",
    Rules: (
      <>
        <ul style={{ paddingLeft: "16px", marginTop: "10px" }}>
          <li>
            <strong style={{ color: "yellow" }}>Registration Fee :</strong> Rs
            150 /-
          </li>
        </ul>
        Register in all 3 events and get 30 Rs off /-
        <ol>
          <li>View the rules of respective Events in th above checkbox.</li>
        </ol>
      </>
    ),
    poc: "ELEEN DAS, SRABASTI BANERJEE [8371983168, 7718651718]",
    amt: 150,
  },
  {
    id: 1,
    Event: "INKSPIRATION",
    Rules: (
      <>
        <ul style={{ marginTop: "10px" }}>
          <li>
            <strong style={{ color: "yellow" }}>Registration Fee :</strong> Rs
            60 /-
          </li>
        </ul>
        Release your inner artist and let your imagination run wild at our
        doodling event, INKSPIRATION where anything is possible on a blank
        canvas.
        <ol style={{ paddingLeft: "16px" }}>
          <li>
            The topic for the event will be released to the participants on
            spot.
          </li>
          <li>
            Participants must bring their drawing tools. Sharing pens, pencils,
            colored markers, etc is not allowed.
          </li>
          <li> Drawing sheets will be provided by the organizing committee.</li>
          <li>Only one entry per participant is allowed.</li>
          <li>
            All submissions will be judged based on their creativity, artistic
            skills, technique, and relevance to the topic.
          </li>
        </ol>
      </>
    ),
    poc: "SUPROTIK PODDAR [ 8961500285 ]",
    amt: 60,
  },
  {
    id: 1,
    Event: "RAPSODY(RAP EVENT)",
    Rules: (
      <>
        <ul style={{ paddingLeft: "16px", marginTop: "10px" }}>
          <li>
            <strong style={{ color: "yellow" }}>Registration Fee :</strong> Rs
            100 /-
          </li>
        </ul>
        In our electrifying rap event, RAPSODY, talented wordsmiths take the
        stage to spit rhymes, drop beats, and ignite the crowd with their
        lyrical prowess. RULES AND REGULATIONS (Rapsody):
        <ol style={{ paddingLeft: "16px" }}>
          <li>Each participant will be allowed 3 minutes for their RAP.</li>
          <li>
            The contestants will be marked based on presentation, content, and
            originality.
          </li>
          <li> Participants should not replicate someone else's work.</li>
          <li>
            The freestyle must be 100% original material and shall not infringe
            upon any third-party copyrights, trademarks, or other intellectual
            property rights nor shall it contain any vulgar words and sexually
            explicit lyrics.
          </li>
          <li>
            {" "}
            The decision of the judges will be final and binding on all the
            participants
          </li>
          <li> Winners will be declared on the day of the event.</li>
        </ol>
      </>
    ),
    poc: "VISHAL JHA, HARSH PRATIK [7004200029, 8340600456]",
    amt: 100,
  },
  {
    id: 1,
    Event: "WIKISPRINT (WIKIPEDIA SEARCH HUNT)",
    Rules: (
      <>
        <ul style={{ paddingLeft: "16px", marginTop: "10px" }}>
          <li>
            <strong style={{ color: "yellow" }}>Registration Fee :</strong> Rs
            50 /-
          </li>
        </ul>
        Get ready to dive down the rabbit hole and navigate the vast maze of
        knowledge on Wikipedia in our event, WIKISPRINT which challenges you to
        jump from page to page until you reach your destination.
        <ol style={{ paddingLeft: "16px" }}>
          <li>
            {" "}
            Participants will be given 10 minutes to solve 3 problems (Easy,
            Medium, and Hard).
          </li>
          <li>
            The hyperlinks used must land the participant on a Wikipedia page.
          </li>
          <li>
            {" "}
            The participants have to keep a written record of the path that they
            are following to reach the destination page. The organizing
            committee will verify the approach before the declaration of
            results.
          </li>
          <li>
            The organizers reserve the right to declare an approach invalid if
            the specified path shown by the participant isn’t accurate.
          </li>
          <li>
            In case of ties, there will be a set of two bonus questions (Hard)
            that will determine the winner(s)
          </li>
        </ol>
      </>
    ),
    poc: "SRABASTI BANERJEE [ 7718651718 ]",
    amt: 50,
  },
  {
    id: 1,
    Event: "CROSSWORD",
    Rules: (
      <>
        <ul style={{ paddingLeft: "16px", marginTop: "10px" }}>
          <li>
            <strong style={{ color: "yellow" }}>Registration Fee :</strong> Rs
            50 /-
          </li>
        </ul>
        Challenge your mind and test your vocabulary in this exciting crossword
        event where every answer is a step closer to completing the puzzle.
        <ol style={{ paddingLeft: "16px" }}>
          <li>
            {" "}
            A set will be provided to each participant, on the day of the event.
          </li>
          <li>Each team will get 1 hour to solve the set.</li>
          <li>
            The volunteers managing the event will keep a check on the number of
            crosswords solved by each team.
          </li>
          <li>
            The participants who get the maximum number of correct answers in an
            hour will get to bag the prize home.
          </li>
          <li>
            Participants must refrain from using unfair means during the event.
          </li>
          <li>All the participants will get a certificate of participation.</li>
        </ol>
      </>
    ),
    poc: "ELEEN DAS [8371983168]",
    amt: 50,
  },
  {
    id: 1,
    Event: "HASTY HOLMES(2 MINUTE MYSTERY)",
    Rules: (
      <>
        <ul style={{ marginTop: "10px" }}>
          <li>
            <strong style={{ color: "yellow" }}>Registration Fee :</strong> Rs
            50 /-
          </li>
        </ul>
        Put your sleuthing skills to the test in our heart-racing
        mystery-solving event, HASTY HOLMES where every second counts in
        cracking the case.
        <ol style={{ paddingLeft: "16px" }}>
          <li>
            Participants would be provided with a passage or a very short story.
            The difficulty will vary as the game goes on.
          </li>
          <li>
            Participants will be given a total of 5min to solve the mystery.
          </li>
          <li>
            Participants are required to find the culprit from the story and
            state a valid reason for the same.
          </li>
          <li>
            It will be of two rounds:
            <ul>
              <li>
                {" "}
                Round 1/Scotland Yard round will be a pen and paper round where
                the participants have to write the name of the culprit with the
                reason on a piece of paper. The correct name of culprit+correct
                reason=+3. No negative marking. Only stating the culprit
                name=+0.5
              </li>
              <li>
                The Top 5 will qualify for round 2/The Reichenbach Falls round.
                This will be a pouncer round. The first to answer the question
                wins the round. The correct name of culprit+correct reason=+3.
                Wrong answer=-3. The correct name of culprit+wrong reason=-2.
              </li>
            </ul>
          </li>
          <li>The decision of the organizers in all cases is absolute.</li>
        </ol>
      </>
    ),
    poc: "SUPRATICK GHOSH [ 9903473558 ]",
    amt: 50,
  },
  {
    id: 1,
    Event: "WIKISPRINT + CROSSWORD + HASTY HOLMES",
    Rules: (
      <>
        <ul style={{ paddingLeft: "16px", marginTop: "10px" }}>
          <li>
            <strong style={{ color: "yellow" }}>Registration Fee :</strong> Rs
            120 /-
          </li>
        </ul>
        Register in all 3 events and get 30 Rs off /-
        <ol>
          <li>View the rules of respective Events in th above checkbox.</li>
        </ol>
      </>
    ),
    poc: "SUPRATICK GHOSH [ 9903473558 ]",
    amt: 120,
  },
  // Add more sub-event clubs here
];
const subEventonlineClubs = [
  {
    id: 1,
    Event: "ARTISTIC VERSES(POETIC ART)",
    Rules: (
      <>
        <ul style={{ paddingLeft: "16px", marginTop: "10px" }}>
          <li>
            <strong style={{ color: "yellow" }}>Registration Fee :</strong> Rs
            60 /-
          </li>
        </ul>
        Unlock your creativity and bring words to life through art in our event,
        ARTISTIC VERSES which challenges participants to draw their
        interpretation of a poem or story
        <ol style={{ paddingLeft: "16px" }}>
          <li>
            Participants have to choose a short poem (English/ Hindi/ Bengali) &
            make a poster based on that
          </li>
          <li>
            Participants have to put the name of the poem & the poet on the
            poster. It may vary based on the designs.
          </li>
          <li>Entries should be in the form of posters.</li>
          <li>
            The posters should be able to illustrate the meaning of the chosen
            poem, and should not be a poster depicting just the title of the
            poem.
          </li>
          <li>
            Judgment will be based on creativity, level of understanding,
            interpretation of the poem & its representation.
          </li>
          <li>
            Plagiarism will not be condoned. Submission is to be done through
            the link provided by Eclectica in the form of a Google form. The
            uploaded document must be a PNG/JPG file.
          </li>
        </ol>
      </>
    ),
    poc: "SUPROTIK PODDAR  [ 8961500285 ]",
    amt: 60,
  },
  {
    id: 1,
    Event: "THE SPACE COMPANY",
    Rules: (
      <>
        <ul style={{ paddingLeft: "16px", marginTop: "10px" }}>
          <li>
            <strong style={{ color: "yellow" }}>Registration Fee :</strong> Rs
            60 /-
          </li>
        </ul>
        Let your imagination soar to the cosmos and beyond as you create
        stunning digital art inspired by the wonders of space in our event, THE
        SPACE COMPANY
        <ol style={{ paddingLeft: "16px" }}>
          <li>
            The participants need to create digital art based on the theme:
            “Space”.
          </li>
          <li> AI-generated art will not be accepted.</li>
          <li>
            Participants should provide the original PSD/AI file for correction.
          </li>
          <li>Beautification of quotations through digital art is accepted.</li>
          <li>
            Participants must refrain from using unfair means during the event.
          </li>
          <li>
            Submissions will be judged based on imagination, creativity,
            expression, and love for space.
          </li>
        </ol>
      </>
    ),
    poc: "SUPROTIK PODDAR  [ 8961500285 ]",
    amt: 60,
  },
  {
    id: 1,
    Event: "PROSIMETRUM",
    Rules: (
      <>
        <>
          <ul style={{ paddingLeft: "16px", marginTop: "10px" }}>
            <li>
              <strong style={{ color: "yellow" }}>Registration Fee :</strong> Rs
              60 /-
            </li>
          </ul>
          Unleash your storytelling prowess and embark on a literary journey as
          you craft a captivating long-form tale inspired by the given topic in
          our event, PROSIMETRUM
          <ol style={{ paddingLeft: "16px" }}>
            <li>
              {" "}
              Participants must submit a prose or poem on the given topic within
              the given deadline.
            </li>
            <li>Participants may write in Hindi, English, or Bengali.</li>
            <li> The word limit is 1000.</li>
            <li>
              Only one entry per participant is allowed. Plagiarism will not be
              tolerated.
            </li>
            <li>
              Participants will be judged based on their content, literary
              prowess, and relevance to a given topic.
            </li>
            <li>The word limit for the event is 70 words</li>
            <li>
              Submission will be through a Google form that will be provided to
              all participants after registering for the event.
            </li>
          </ol>
        </>
      </>
    ),
    poc: "ELEEN DAS, SRABASTI BANERJEE [8371983168, 7718651718]",
    amt: 60,
  },
  {
    id: 1,
    Event: "MANDALA  ART",
    Rules: (
      <>
        <>
          <ul style={{ paddingLeft: "16px", marginTop: "10px" }}>
            <li>
              <strong style={{ color: "yellow" }}>Registration Fee :</strong> Rs
              60 /-
            </li>
          </ul>
          Find inner peace and create stunning, intricate designs in this
          mesmerizing mandala art event that transports you to a state of
          mindfulness and tranquility. Rules for Mandala Art :
          <ol style={{ paddingLeft: "16px" }}>
            <li>Entries should be in the form of Mandala Art.</li>
            <li>
              {" "}
              Only one entry will be accepted per participant. Plagiarism will
              not be tolerated.
            </li>
            <li>
              {" "}
              The link for submission will be provided after registration. All
              the participants need to submit their artwork along with their
              PSD/AI file through a Google form whose link will be provided
              later.
            </li>
          </ol>
        </>
      </>
    ),
    poc: "MONIDEEPA MAITI [ 7003167743 ]",
    amt: 60,
  },
  {
    id: 1,
    Event: "INKSPIRATION + ARTISTIC VERSES + THE SPACE COMPANY + MANDALA  ART",
    Rules: (
      <>
        <ul style={{ marginTop: "10px" }}>
          <li>
            <strong style={{ color: "yellow" }}>Registration Fee :</strong> Rs
            200 /-
          </li>
        </ul>
        Register in all 4 events and get 40 Rs off /-
        <ol>
          <li>View the rules of respective Events in th above checkbox.</li>
        </ol>
      </>
    ),
    poc: "SUPROTIK PODDAR  [ 8961500285 ]",
    amt: 200,
  },
  // Add more sub-event clubs here
];
const closeButtonStyle = {
  position: "absolute",
  top: "8px",
  right: "8px",
};

const Registration = ({ setRegisterClicked }) => {
  const [formdata, setFormData] = useState({
    name: "",
    college: "",
    department: "",
    year: "",
    sec: "",
    email: "",
    contact: "",
    wp_contact: "",
    offline_events: "",
    online_events: "",
    payment: "",
  });

  const [checkboxValuesOnline, setCheckboxValuesOnline] = useState([]);
  const [checkboxValuesOffOnline, setCheckboxValuesOffOnline] = useState([]);
  const [totalAmmount, setTotalAmmount] = useState(0);
  const [screenshot, setScreenshort] = useState(null);
  const [errorText, setErrorText] = useState(false);
  const [loading, setLoading] = useState(false);
  const [selectedClub, setSelectedClub] = useState(null);
  const [blogErrorEmail, setBlogErrorEmail] = useState(false);
  const [formError, setformError] = useState(false);
  const [successmsg, setSucessMsg] = useState(false);
  const [failMsg, setFail] = useState(false);
  const navigate = useNavigate();
  const isMobileScreen = useMediaQuery("(max-width:600px)");
  const [open, setOpen] = useState(false);
  const [openFail,setOpenFail]=useState(false);

  console.log("ankit 902",openFail,openFail);
  console.log("ankit903",successmsg,open)
  const handleClick = () => {
    setOpen(true);
  };
  const handleCloseFail = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenFail(false);
  };
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  const handleClubClick = (club) => {
    setSelectedClub(club);
  };

  const handleDialogClose = () => {
    setSelectedClub(null);
  };

  console.log("ankit121", formdata);
  console.log("ankit122", totalAmmount);

  console.log("ankit091", checkboxValuesOnline, checkboxValuesOffOnline);
  useEffect(() => {
    if (
      formdata?.name &&
      formdata?.college &&
      formdata?.department &&
      formdata?.email &&
      formdata?.contact &&
      formdata?.wp_contact &&
      formdata?.wp_contact &&
      formdata?.sec &&
      formdata.year &&
      screenshot
    ) {
      setErrorText(false);
    }
  }, [formdata]);
  const onsubmitForm = async (e) => {
    console.log("ankit 081");
    e.preventDefault();
    try {
      if (
        !formdata?.name ||
        !formdata?.college ||
        !formdata?.department ||
        !formdata?.email ||
        !formdata?.contact ||
        !formdata?.wp_contact ||
        !formdata?.sec ||
        !formdata.year ||
        !screenshot
      ) {
        setErrorText(true);
        console.log("ankit80", formdata);
        return;
      } else if (
        checkboxValuesOnline.length == 0 &&
        checkboxValuesOffOnline.lenght == 0
      ) {
        setErrorText(true);
        console.log("ankit81", formdata);
      } else {
        if (!screenshot) {
          alert("attach screensort");
          return;
        }
        console.log("ankit 082");
        var imageUrl;
        setLoading(true);
        try {
          imageUrl = await imageuploadHandler(screenshot);
          console.log("ankit901", imageUrl);
        } catch (err) {
          console.log("getting err", err);
          setFail(true);
          setLoading(false);
          return;
        }
        axios({
          method: "POST",
          url: "https://dull-gold-cow-shoe.cyclic.app/submit-form",
          data: {
            name: formdata?.name,
            college: formdata?.college,
            department: formdata?.department,
            year: formdata?.year,
            sec: formdata?.sec,
            email: formdata?.email,
            contact: formdata?.contact,
            wp_contact: formdata?.wp_contact,
            online_events: checkboxValuesOnline.toString(),
            offline_events: checkboxValuesOffOnline.toString(),
            payment: imageUrl,
          },
        })
          .then(() => {})
          .then(() => {
            setLoading(false);
            setSucessMsg(true);
            setOpen(true);
            setFormData({
              name: "",
              college: "",
              department: "",
              year: "",
              sec: "",
              email: "",
              contact: "",
              wp_contact: "",
              offline_events: "",
              online_events: "",
              payment: "",
            });
            setCheckboxValuesOnline([]);
            setCheckboxValuesOffOnline([]);
            setScreenshort(null)
          });
        //    await fetch("http://dull-gold-cow-shoe.cyclic.app/submit-form", {
        //     method: "POST",
        //     body: JSON.stringify({
        //     name: formdata?.name,
        //     college:formdata?.college,
        //     department: formdata?.department,
        //     year:formdata?.year,
        //     sec:formdata?.sec,
        //     email: formdata?.email,
        //     contact: formdata?.contact,
        //     wp_contact : formdata?.wp_contact,
        //     online_events :checkboxValuesOnline.toString(),
        //     offline_events :checkboxValuesOffOnline.toString(),
        //     payment : formdata?.payment,
        //   }),
        //    mode: 'no-cors',
        //    headers: {
        //     'Access-Control-Allow-Origin' : '*'
        // },
        // })
        //   .then((response) => response.json())
        //   .then((json) => {
        // console.log(json)
        // setBlogPopUp(false);
        // setblogPostSucess(true);
        // })
      }
    } catch (err) {
      console.log(err);
      setFail(true);
      setLoading(false);
    }
  };
  const handleChangeOnline = (event) => {
    const { name, checked } = event.target;
    if (checked) {
      setCheckboxValuesOnline([...checkboxValuesOnline, name]);
      subEventonlineClubs.forEach((event) => {
        if (event.Event == name) {
          setTotalAmmount((pre) => pre + event.amt);
        }
      });
    } else {
      setCheckboxValuesOnline(
        checkboxValuesOnline.filter((item) => item !== name)
      );
      subEventonlineClubs.forEach((event) => {
        if (event.Event == name && totalAmmount - event?.amt >= 0) {
          setTotalAmmount((pre) => pre - event.amt);
        }
      });
    }
  };
  const handleChangeOffOnline = (event) => {
    const { name, checked } = event.target;
    if (checked) {
      setCheckboxValuesOffOnline([...checkboxValuesOffOnline, name]);
      setCheckboxValuesOnline([...checkboxValuesOnline, name]);
      subEventClubs.forEach((event) => {
        if (event.Event === name) {
          setTotalAmmount((pre) => pre + event.amt);
        }
      });
    } else {
      setCheckboxValuesOffOnline(
        checkboxValuesOffOnline.filter((item) => item !== name)
      );
      subEventClubs.forEach((event) => {
        if (event.Event === name && totalAmmount - event?.amt >= 0) {
          setTotalAmmount((pre) => pre - event.amt);
        }
      });
    }
  };
  const imageuploadHandler = async (img) => {
    const _data = new FormData();
    _data.append("file", img);
    _data.append("upload_preset", "xd7ycb4s");
    _data.append("cloud_name", "dbjoksrli");
    return new Promise(async (resolve, reject) => {
      try {
        const { data } = await axios({
          method: "POST",
          url: "https://api.cloudinary.com/v1_1/dbjoksrli/image/upload",
          data: _data,
        });
        console.log("ankit90", data?.secure_url);
        resolve(data.secure_url);
      } catch (err) {
        reject(err);
      }
    });
  };

  return (
    <div
      style={{
        background: "white",
        width: isMobileScreen ? "100%" : "50%",
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        marginTop: isMobileScreen ? "53px" : "70px",
        height: "100%",
        marginBottom: "30px",
      }}
    >
      <form onSubmit={onsubmitForm}>
        <div>
          <DialogTitle disableTypography>
            <IconButton
              aria-label="close"
              onClick={() => {
                setRegisterClicked(false);
              }}
              style={{ float: "right" }}
            >
              <HighlightOffIcon />
            </IconButton>
            <h2>Register For Eclectica'23</h2>
            <div style={{ fontSize: "16px" }}>
              Download the complete{" "}
              <a
                href="../images/WINNER_PAST/Eclectica 2023 Rulebook.pdf"
                download="Eclectica_Rule_book_23"
                target="_blank"
                rel="noreferrer"
                style={{ cursor: "pointer", textDecoration: "none" }}
              >
                RuleBook
              </a>
            </div>
          </DialogTitle>
          {/* <form> */}
          <DialogContent>
            <DialogContentText>Please fill up the form below</DialogContentText>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  margin="dense"
                  id="name"
                  label="Name"
                  type="text"
                  value={formdata?.name}
                  onChange={(e) =>
                    setFormData((pre) => ({ ...pre, name: e.target.value }))
                  }
                  fullWidth
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  margin="dense"
                  id="College"
                  label="College"
                  type="text"
                  value={formdata?.college}
                  onChange={(e) =>
                    setFormData((pre) => ({ ...pre, college: e.target.value }))
                  }
                  fullWidth
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  margin="dense"
                  id="title"
                  label="Department"
                  type="text"
                  value={formdata?.department}
                  onChange={(e) =>
                    setFormData((pre) => ({
                      ...pre,
                      department: e.target.value,
                    }))
                  }
                  fullWidth
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  margin="dense"
                  id="title"
                  value={formdata?.year}
                  type="text"
                  label="Year"
                  onChange={(e) =>
                    setFormData((pre) => ({ ...pre, year: e.target.value }))
                  }
                  fullWidth
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  margin="dense"
                  id="title"
                  label="Section"
                  type="text"
                  value={formdata?.sec}
                  onChange={(e) =>
                    setFormData((pre) => ({ ...pre, sec: e.target.value }))
                  }
                  fullWidth
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  margin="dense"
                  id="email"
                  label="Email"
                  type="email"
                  value={formdata?.email}
                  onChange={(e) =>
                    setFormData((pre) => ({ ...pre, email: e.target.value }))
                  }
                  fullWidth
                />
                {blogErrorEmail && (
                  <div style={{ color: "red" }}>Please Enter a valid Email</div>
                )}
              </Grid>

              <Grid item xs={12}>
                <TextField
                  margin="dense"
                  id="title"
                  label="Contact No."
                  type="text"
                  value={formdata?.contact}
                  onChange={(e) =>
                    setFormData((pre) => ({ ...pre, contact: e.target.value }))
                  }
                  fullWidth
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  margin="dense"
                  id="title"
                  label="WhatsApp No."
                  type="text"
                  value={formdata?.wp_contact}
                  onChange={(e) =>
                    setFormData((pre) => ({
                      ...pre,
                      wp_contact: e.target.value,
                    }))
                  }
                  fullWidth
                />
              </Grid>
              <Grid item xs={12}>
                <h3>Registration for Offline Events</h3>
                <FormGroup>
                  {subEventClubs.map((event) => {
                    return (
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          justifyContent: "space-between",
                          alignItems: "center",
                        }}
                      >
                        <FormControlLabel
                          style={{ fontSize: isMobileScreen ? "12px" : "20px" }}
                          control={
                            <Checkbox
                              name={event.Event}
                              checked={checkboxValuesOffOnline.includes(
                                event.Event
                              )}
                              onChange={handleChangeOffOnline}
                            />
                          }
                          label={event.Event}
                        />
                        <div
                          style={{
                            marginLeft: "10px",
                            color: "blue",
                            textDecoration: "underline",
                            cursor: "pointer",
                            fontSize: "15px",
                            marginRight: "10px",
                          }}
                          onClick={() => handleClubClick(event)}
                        >
                          Rules
                        </div>
                      </div>
                    );
                  })}
                </FormGroup>
              </Grid>
              <Grid item xs={12}>
                <h3>Registration for Online Events</h3>
                <FormGroup>
                  {subEventonlineClubs.map((event) => {
                    return (
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          justifyContent: "space-between",
                          alignItems: "center",
                        }}
                      >
                        <FormControlLabel
                          style={{ fontSize: isMobileScreen ? "12px" : "20px" }}
                          control={
                            <Checkbox
                              name={event.Event}
                              checked={checkboxValuesOnline.includes(
                                event.Event
                              )}
                              onChange={handleChangeOnline}
                            />
                          }
                          label={event.Event}
                        />
                        <div
                          style={{
                            marginLeft: "10px",
                            color: "blue",
                            textDecoration: "underline",
                            cursor: "pointer",
                            fontSize: "15px",
                            marginRight: "10px",
                          }}
                          onClick={() => handleClubClick(event)}
                        >
                          Rules
                        </div>
                      </div>
                    );
                  })}
                </FormGroup>
              </Grid>
              <Grid item xs={12}>
                <h3>Payment: </h3>
                <div>
                  Please do scan and pay ₹{" "}
                  <strong style={{ fontSize: "20px" }}>{totalAmmount}</strong>
                </div>
              </Grid>
              <Grid
                item
                xs={12}
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <div
                  style={{
                    width: "280px",
                    height: "300px",
                  }}
                >
                  <img
                    style={{ width: "100%", height: "100%" }}
                    src={payment_23}
                  />
                </div>
              </Grid>
              <Grid item xs={12} style={{ marginTop: "20px" }}>
                <h3>Upload: </h3>
                <div>Please upload the payment proof in *img format</div>
              </Grid>
              <Grid item xs={12} style={{ width: "100%" }}>
                <input
                  accept="image/*"
                  id="contained-button-file"
                  type="file"
                  style={{ width: "100%" }}
                  onChange={(e) => setScreenshort(e.target.files[0])}
                />
              </Grid>
            </Grid>
          </DialogContent>
        </div>
        {errorText && (
          <h5 style={{ color: "red" }}>
            *please fill all the detail & attach payment screenshot.
          </h5>
        )}
        <Grid item xs={12} style={{ width: "90%" }}>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-end",
            }}
          >
            <Button
              variant="text"
              style={{ cursor: "pointer" }}
              onClick={() => {
                setRegisterClicked(false);
              }}
            >
              cancel
            </Button>
            <Button
              variant="contained"
              color="primary"
              type="submit"
              disabled={loading}
              className="click-to-know-button"
              style={{ width: isMobileScreen ? "30%" : "20%" }}
            >
              {loading ? (
                <CircularProgress size={30} style={{ color: "#ed8b08" }} />
              ) : (
                "submit"
              )}
            </Button>
          </div>
        </Grid>
      </form>
      <Dialog open={!!selectedClub} onClose={handleDialogClose}>
        {selectedClub && (
          <>
            <DialogTitle className="dialog-content-dev">
              {selectedClub.Event}
            </DialogTitle>
            <DialogContent
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                backgroundColor: "#ffffff",
                padding: "16px",
              }}
              className="dialog-content-dev-1"
            >
              <IconButton style={closeButtonStyle} onClick={handleDialogClose}>
                {/* <CloseIcon /> */}
              </IconButton>
              <Typography variant="body1">{selectedClub.Rules}</Typography>
              <Typography
                variant="body2"
                color="textSecondary"
                style={{ color: "rgb(224, 133, 21)" }}
              >
                {selectedClub.poc}
              </Typography>
            </DialogContent>
          </>
        )}
      </Dialog>
      {successmsg && (
          <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
            <Alert
              onClose={handleClose}
              severity="success"
              sx={{ width: "100%" }}
            >
              Thank you for registering , We'll reach out you soon !
            </Alert>
          </Snackbar>
        )}
      {failMsg && (
        <Snackbar open={openFail} autoHideDuration={6000} onClose={handleCloseFail}>
          <Alert onClose={handleCloseFail} severity="error" sx={{ width: "100%" }}>
            Sorry the form submission fail , Please try again or contact above
            Number !
          </Alert>
        </Snackbar>
      )}
    </div>
  );
};

export default Registration;
