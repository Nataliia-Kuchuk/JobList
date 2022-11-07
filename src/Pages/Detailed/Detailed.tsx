import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { IJobs } from "../../types/types";
import { FetchResponse, useFetchData } from "../../hooks/useFetchData";
import moment from "moment";
import {
  AditionalInfoContainer,
  Btn,
  BtnReturn,
  BtnsContainer,
  CircleContainer,
  Contacts,
  DetailsContent,
  DetailsContentBtn,
  DetailsContentHeader,
  DetailsContentHeaderLeft,
  DetailsContentHeaderRight,
  DetailsContentHeaderRightContainer,
  DetailsContentLeft,
  DetailsContentRight,
  DetailsTitle,
  DetailsTitleContainer,
  DetailsTitlePrice,
  DetailsTitlePriceCost,
  DetailsTitlePriceSub,
  ImageContainer,
  JobMainInformation,
  JobMainInformationList,
  JobMainInformationText,
  JobMainInformationTitle,
  Link,
  LocationContainer,
  LocationContainerBig,
  MapContainer,
  PostedTime,
  TextContainer,
  TextContainerInformation,
  TextContainerInformationMain,
} from "./styles";
import Saved from "../../assets/icons/Saved";
import Share from "../../assets/icons/Share";
import ArrowDetailed from "../../assets/icons/ArrowDetailed";
import SemiCircle from "../../assets/icons/SemiCircle";
import map from "./img/map.png";
import location from "./img/location.png";

const Detailed = () => {
  const { id } = useParams();
  const { jobs, loading, error }: FetchResponse = useFetchData();
  const [job, setJob] = useState<IJobs>();
  useEffect(() => {
    const item = jobs.find((item: any) => item.id === id);
    setJob(item);
    console.log(id, job);
  }, [job, jobs, id]);
  //@ts-ignore
  const date = moment().year() - moment.utc(job?.createdAt).format("YYYY");
  const navigate = useNavigate();
  return (
    <DetailsContent>
      <DetailsContentLeft>
        <DetailsContentHeader>
          <DetailsContentHeaderLeft>Job Details</DetailsContentHeaderLeft>
          <DetailsContentHeaderRight>
            <DetailsContentHeaderRightContainer>
              <Saved />
            </DetailsContentHeaderRightContainer>
            Save to my list
            <DetailsContentHeaderRightContainer>
              <Share />
            </DetailsContentHeaderRightContainer>
            Share
          </DetailsContentHeaderRight>
        </DetailsContentHeader>
        <DetailsContentBtn>Apply now</DetailsContentBtn>
        <div>
          <DetailsTitleContainer>
            <DetailsTitle>{job?.title}</DetailsTitle>
            <DetailsTitlePrice>
              <DetailsTitlePriceCost>€ {job?.salary}</DetailsTitlePriceCost>
              <DetailsTitlePriceSub>Brutto, per year</DetailsTitlePriceSub>
            </DetailsTitlePrice>
          </DetailsTitleContainer>
          <PostedTime>
            Posted {date}
            years ago
          </PostedTime>
        </div>
        <JobMainInformation>
          <JobMainInformationText>{job?.description}</JobMainInformationText>
          <JobMainInformationTitle>Responsibilities</JobMainInformationTitle>
          <JobMainInformationText>
            At WellStar, we all share common goals. That’s what makes us so
            successful – and such an integral part of our communities. We want
            the same things, for our organization, for our patients, and for our
            colleagues. As the most integrated healthcare provider in Georgia,
            this means we pride ourselves on investing in the communities that
            we serve. We continue to provide innovative care models, focused on
            improving quality and access to healthcare. Wellstar Medical Group,
            a physician-led multi-specialty group in Atlanta, Georgia, is
            currently recruiting for a BC/BE cardiothoracic surgeon to join
            their existing cardiovascular program. This is an opportunity to
            play a key role on a multidisciplinary team of cardiologists and
            surgeons.
          </JobMainInformationText>
          <JobMainInformationText>
            At WellStar, we all share common goals. That’s what makes us so
            successful – and such an integral part of our communities. We want
            the same things, for our organization, for our patients, and for our
            colleagues. As the most integrated healthcare provider in Georgia,
            this means we pride ourselves on investing in the communities that
            we serve. We continue to provide innovative care models, focused on
            improving quality and access to healthcare. Wellstar Medical Group,
            a physician-led multi-specialty group in Atlanta, Georgia, is
            currently recruiting for a BC/BE cardiothoracic surgeon to join
            their existing cardiovascular program. This is an opportunity to
            play a key role on a multidisciplinary team of cardiologists and
            surgeons.
          </JobMainInformationText>
          <JobMainInformationText>
            At WellStar, we all share common goals. That’s what makes us so
            successful – and such an integral part of our communities. We want
            the same things, for our organization, for our patients, and for our
            colleagues. As the most integrated healthcare provider in Georgia,
            this means we pride ourselves on investing in the communities that
            we serve. We continue to provide innovative care models, focused on
            improving quality and access to healthcare. Wellstar Medical Group,
            a physician-led multi-specialty group in Atlanta, Georgia, is
            currently recruiting for a BC/BE cardiothoracic surgeon to join
            their existing cardiovascular program. This is an opportunity to
            play a key role on a multidisciplinary team of cardiologists and
            surgeons.
          </JobMainInformationText>
          <JobMainInformationTitle>
            Compensation & Benefits:
          </JobMainInformationTitle>
          <JobMainInformationList>
            {job?.benefits.map((item) => (
              <li>{item}</li>
            ))}
          </JobMainInformationList>
          <DetailsContentBtn>Apply now</DetailsContentBtn>
          <DetailsContentHeader>
            <DetailsContentHeaderLeft>Additional info</DetailsContentHeaderLeft>
          </DetailsContentHeader>
          <AditionalInfoContainer>Employment type</AditionalInfoContainer>
          <BtnsContainer>
            {job?.employment_type.map((item) => (
              <Btn blue>{item}</Btn>
            ))}
          </BtnsContainer>
          <AditionalInfoContainer>Benefits</AditionalInfoContainer>
          <BtnsContainer>
            {job?.benefits.map((item) => (
              <Btn>{item}</Btn>
            ))}
          </BtnsContainer>
          <DetailsContentHeader>
            <DetailsContentHeaderLeft>Attached images</DetailsContentHeaderLeft>
          </DetailsContentHeader>
          {job?.pictures.map((item) => (
            <ImageContainer src={item} />
          ))}
        </JobMainInformation>
        <BtnReturn onClick={() => navigate(-1)}>
          <DetailsContentHeaderRightContainer>
            <ArrowDetailed />
          </DetailsContentHeaderRightContainer>
          RETURN TO JOB BOARD
        </BtnReturn>
        <DetailsContentHeader>
          <Contacts>Contacts</Contacts>
        </DetailsContentHeader>
      </DetailsContentLeft>
      <DetailsContentRight>
        <TextContainer>
          <TextContainerInformationMain>
            Department name.
          </TextContainerInformationMain>
          <TextContainerInformationMain>
            {job?.name}
          </TextContainerInformationMain>
          <TextContainerInformation>
            <LocationContainer src={location} />
            {job?.address}
          </TextContainerInformation>
          <TextContainerInformation>Gürtel 18-20</TextContainerInformation>
          <TextContainerInformation>
            <Link href={`tel: ${job?.phone}`}>{job?.phone}</Link>
            <br />
            <Link href={`mailto: ${job?.email}`}>{job?.email}</Link>
          </TextContainerInformation>
        </TextContainer>
        <CircleContainer>
          <SemiCircle />
        </CircleContainer>
        <LocationContainerBig src={location} />
        <MapContainer src={map} />
      </DetailsContentRight>
    </DetailsContent>
  );
};

export default Detailed;
