import React from "react";
import { BadgeProps } from "@/components/Badges/Badges";
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import styled from 'styled-components';
import { Roboto } from 'next/font/google'
 
const roboto = Roboto({
  weight: '700',
  subsets: ['latin'],
})

const BadgeContainer = styled.div`
  position: relative;
  overflow: hidden;
`;

const Description = styled.div`
  position: absolute;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 5px;
  border: 3px solid #000;
  border-radius: 10px;
`;

export const GenericBadge : React.FC<BadgeProps> = (prop) =>{
  let {name, image, color, size} = prop;
  if (image === undefined)
    image = './badge/runningbadge.png';

  const badgeContainerStyle = {
    width: `${size}px`,
    height: `${size * 0.875}px`,
  };

  const descriptionStyle = {
    height: `${size * 0.125}px`,
    width: `${size}px`,
    backgroundColor: color,
  };
  
  return (
      <BadgeContainer style={badgeContainerStyle}>
        <Avatar 
          alt="Badge Image"
          sx={{ width: `${size}px`, height: `${size}px`, border: `${size * 0.02}px solid white`}}
          src={image}
        />
        <Description style={descriptionStyle}>
          <Typography align="center" style={{ fontSize: `${size * 0.05}px`, fontWeight: 'bold' }} >
            {name}
          </Typography>
        </Description>
      </BadgeContainer>
  );
}