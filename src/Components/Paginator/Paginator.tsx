import React, {FC} from 'react';
import Arrow from '../../assets/icons/Arrow';
import ArrowNext from '../../assets/icons/ArrowNext';
import Separator from '../../assets/icons/Separator';
import { ArrowContainer, Container, Page, PagesContainer } from './styled';

interface PaginatorProps  {
    currentPage: number;
    pagination: (page: number) => void;
    jobOnPage: number;
    allJobs: number;
    prevPage: () => void;
    nextPage: () => void
}

const Paginator: FC<PaginatorProps> = ({  currentPage, pagination, jobOnPage, allJobs, prevPage, nextPage}) => {
    const pageNumber = [];
    for (let i = 1; i <= Math.ceil(allJobs / jobOnPage); i++){
        pageNumber.push(i)
    }
    return (
      <Container>
        <PagesContainer>
                <Arrow onClick={() => prevPage() } />
          <ArrowContainer>
            <Separator />
          </ArrowContainer>
          {pageNumber.map((item) => (
              <Page
                  currentPage={currentPage === item ? true : false}
                  onClick={() => pagination(item)}>{item}</Page>
          ))}
          <ArrowContainer>
            <Separator />
          </ArrowContainer>
                <ArrowNext onClick={ () => nextPage()} />
        </PagesContainer>
      </Container>
    );
};

export default Paginator;