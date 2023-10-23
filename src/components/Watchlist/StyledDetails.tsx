import styled from "styled-components";

export const StyledDetails = styled.div`
  line-height: 1.4;
  font-size: 1.4rem;
  header {
    display: flex;
    height: auto;
    max-height: 60vh;
  }
  section {
    padding: 2rem 10rem 2rem 0;
    display: flex;
    flex-direction: column;
    gap: 1.6rem;
  }
  img {
    height: 300px;
    margin: 2.4rem;
  }
  @media screen and (max-width: 768px) {
    header {
      flex-direction: column;
      align-items: center;
    }
    section {
      width: 100%;
      display: flex;
      align-items: center;
      padding: 2rem;
      margin: 0;
    }
    img {
      width: 40%;
      height: auto;
    }
  }
`;

export const DetailsOverview = styled.div`
  width: 100%;
  padding: 2.4rem 3rem;
  display: flex;
  flex-direction: column;
  gap: 0;
  h2 {
    font-size: 2.4rem;
    margin-bottom: 0.4rem;
    line-height: 1.1;
  }
  p {
    display: flex;
    align-items: center;
    gap: 0.8rem;
  }
  @media screen and (max-width: 768px) {
    align-items: center;
  }
`;

export const RatingContainer = styled.div`
  background-color: ${({ theme }) => theme.list};
  border-radius: 0.9rem;
  padding: 2rem 2.4rem;
  margin-bottom: 0.8rem;
  font-weight: 600;
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
`;
