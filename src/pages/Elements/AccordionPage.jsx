import React, { useEffect } from 'react';
import Accordion from '../../components/accordion';
import AccordionDefault from '../../components/accordion/accordionDefault';

const AccordionPage = () => {
  useEffect(() => {
    document.title = "Accordion - My Portfolio";
  }, []);

  return (
    <>
      <Accordion />
      <AccordionDefault />
    </>
  );
};

export default AccordionPage;
