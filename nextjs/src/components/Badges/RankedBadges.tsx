import React from 'react';
import { Badge, BadgeProps, BadgeRank } from '@components/Badges/Badges';
import { Box } from '@mui/system';
import Avatar from '@mui/material/Avatar';

// Different Rank components for each rank type
const BronzeRank : React.FC<BadgeProps> = (props) => {
  return GenericRankedBadge({...props, borderImage: './badges/bronzeborder.png'});
}

const SilverRank : React.FC<BadgeProps> = (props) => {
  return GenericRankedBadge({...props, borderImage: './badges/silverborder.png'});
}

const GoldRank : React.FC<BadgeProps> = (props) => {
  return GenericRankedBadge({...props, borderImage: './badges/goldborder.png'});
}

const GenericRankedBadge : React.FC<BadgeProps> = (prop) => {
  const { borderImage, size, children } = prop;
  return (
    <Box 
      display="flex" 
      alignItems="center" 
      justifyContent="center" 
      sx={{ 
        width: `${size * .95}px`,
        height: `${size}px`, 
        backgroundImage: `url(${borderImage})`, 
        backgroundSize: 'cover',
        backgroundPosition: 'center', 
      }}
    >
      {children}
    </Box>
  )
}

// Factory function to create the appropriate Rank component
const createRankComponent = (rank : String) => {
  switch (rank) {
    case 'bronze':
      return BronzeRank;
    case 'silver':
      return SilverRank;
    case 'gold':
      return GoldRank;
    default:
      throw new Error(`Invalid rank type: ${rank}`);
  }
};


export const RankedBadge : React.FC<BadgeProps> = (props) => {
  const RankComponent = props.rank ? createRankComponent(props.rank) : BronzeRank;
  
  return (
    <Box>
      {RankComponent && (
          <RankComponent {...props}>
            <Badge {...props} size={props.size * 0.70} />
          </RankComponent>
      )}
    </Box>
  );
}