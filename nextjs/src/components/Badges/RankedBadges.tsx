'use client'

import React from 'react';
import { Badge, BadgeProps } from '@components/Badges/Badges';
import { Box } from '@mui/system';
import { Button, Icon, Dialog, DialogTitle, DialogActions, DialogContent, DialogContentText } from '@mui/material';
import Paper, { PaperProps } from '@mui/material/Paper';
import Draggable from 'react-draggable';
import CloseIcon from '@mui/icons-material/Close';

// Different Rank components for each rank type
const BronzeRank: React.FC<BadgeProps> = props => {
  return GenericRankedBadge({ ...props, borderImage: './badges/bronzeborder.png' });
};

const SilverRank: React.FC<BadgeProps> = props => {
  return GenericRankedBadge({ ...props, borderImage: './badges/silverborder.png' });
};

const GoldRank: React.FC<BadgeProps> = props => {
  return GenericRankedBadge({ ...props, borderImage: './badges/goldborder.png' });
};

const GenericRankedBadge: React.FC<BadgeProps> = prop => {
  const { borderImage, size, children } = prop;
  return (
    <Box
      display='flex'
      alignItems='center'
      justifyContent='center'
      sx={{
        width: `${size * 0.95}px`,
        height: `${size}px`,
        backgroundImage: `url(${borderImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}>
      {children}
    </Box>
  );
};

// Factory function to create the appropriate Rank component
const createRankComponent = (rank: String) => {
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

function PaperComponent(props: PaperProps) {
  return (
    <Draggable
      handle="#draggable-dialog-title"
      cancel={'[class*="MuiDialogContent-root"]'}
    >
      <Paper {...props} />
    </Draggable>
  );
}

export const RankedBadge: React.FC<BadgeProps> = ({ disabled = false, ...props }) => {
  const { rank, name, description, type } = props;
  const RankComponent = rank ? createRankComponent(rank) : BronzeRank;
  const [open, setOpen] = React.useState(false);

  const handleShowInfo = () => {
    setOpen(true);
  };

  const handleHideInfo = () => {
    setOpen(false);
  };

  return (
    <Box>
      <Button disabled={disabled} sx={{ borderRadius: '50%' }} onClick={handleShowInfo}>
        {RankComponent && (
          <RankComponent {...props}>
            <Badge {...props} size={props.size * 0.7} />
          </RankComponent>
        )}
      </Button>
      <Dialog
        open={open}
        onClose={handleHideInfo}
        PaperComponent={PaperComponent}
        aria-labelledby='draggable-dialog-title'>
        <DialogTitle style={{ cursor: 'move' }} id='draggable-dialog-title'>
          {name}
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            {description}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <CloseIcon onClick={handleHideInfo}/>
        </DialogActions>
      </Dialog>
    </Box>
  );
};
