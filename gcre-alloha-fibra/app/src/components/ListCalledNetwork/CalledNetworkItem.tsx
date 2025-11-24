import {
    Flex,
    Circle,
    Box,
    Image,
    Badge,
    useColorModeValue,
    Button,
    ListItem
  } from '@chakra-ui/react';
import { useState } from 'react';

   interface CalledNetworkItem {
      codebdesk : Key,
      serviceorder:  string,
      contract:  string,
      servicelevelagreement:  string,
      openingdate:  string,
      dispatchdate:  string,
      startdateserviceorder:  string,
      enddateserviceorder:  string,
      description:  string,
      sector:  string,
      integratedsystem:  string,
      regionalresponsible:  string,
      technicalresponsible:  string,
      analystresponsible:  string,
      statusColorBdesk: string,
      statusColorOrderService: string,
      statusColorContract: string,
  };

export default function CalledNetworkItem(calledNetworkItem:CalledNetworkItem) {
    const [isStatusColor,setisStatusColor] = useState(String)

    return(
        <ListItem>
                <Flex  color={isStatusColor} fontSize="1rem" fontWeight="bold" as="h2" mb={2}>
                    {calledNetworkItem.codebdesk}
                </Flex>
                {
                /* 
                1 - DEVEMOS IMPLEMENTAR A LINHA DA LISTA COM OS SEGUINTES CAMPOS USANDO NOSSA VARIAVEL calledNetworkItem
                2 - Implementar as variaveis que terão status colorido conforme o status da O.S e Bdesk e contrato

                codebdesk
                serviceorder
                contract
                servicelevelagreement
                openingdate
                dispatchdate
                startdateserviceorder
                enddateserviceorder
                description
                sector
                integratedsystem
                regionalresponsible
                technicalresponsible
                analystresponsible
                */}

        </ListItem>
    )
}