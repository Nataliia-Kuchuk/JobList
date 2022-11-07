import React, { FC } from 'react';
import { IJobs } from '../../types/types';
import moment from "moment";
import { ItemContainer, ItemContainerLeft, ItemContainerRight, ItemContainerRightAdaptive, ItemImg, ItemLocation, ItemSubTitle, ItemTitle, JobRating, LinkTitle, LocationImg, Save, TimePosted } from './styled';
import location from './img/location.png'
import Stars from '../../assets/icons/Stars';
import Saved from '../../assets/icons/Saved';
interface JobListItemProps {
    item: IJobs;
}

const JoblistItem: FC<JobListItemProps> = ({ item }) => {
  //@ts-ignore
  const date = moment().year() - moment.utc(item?.createdAt).format("YYYY");
  return (
    <ItemContainer>
      <ItemContainerLeft>
        <ItemImg src={item.pictures[0]} alt="picture"></ItemImg>
        <div>
          <ItemContainerRightAdaptive>
            <JobRating>
              <Stars />
              <Stars />
              <Stars />
              <Stars />
              <Stars />
            </JobRating>
            <TimePosted>
              <Save>
                <Saved />
              </Save>
              {`Posted ${date} years ago`}
            </TimePosted>
          </ItemContainerRightAdaptive>
          <ItemTitle>
            <LinkTitle to={`/${item.id}`}>{item.title}</LinkTitle>
          </ItemTitle>
          <ItemSubTitle>Department name • {item.name}</ItemSubTitle>
          <ItemLocation>
            <LocationImg src={location} alt="location_item"></LocationImg>
            {item.address}
          </ItemLocation>
        </div>
      </ItemContainerLeft>

      <ItemContainerRight>
        <JobRating>
          <Stars />
          <Stars />
          <Stars />
          <Stars />
          <Stars />
        </JobRating>
        <TimePosted>
          <Save>
            <Saved />
          </Save>
          {`Posted ${date} years ago`}
        </TimePosted>
      </ItemContainerRight>
    </ItemContainer>
  );
};

export default JoblistItem;