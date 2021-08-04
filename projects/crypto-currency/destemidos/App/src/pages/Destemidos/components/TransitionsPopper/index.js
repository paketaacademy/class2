import React from 'react';
import Popper from '@material-ui/core/Popper';
import Fade from '@material-ui/core/Fade';
import { PaperDiv } from '../../style';

export default function TransitionsPopper() {

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'transitions-popper' : undefined;

  return (
    <>
      <button className='learn--button'aria-describedby={id} type="button" onClick={handleClick}>
        LEARN MORE ABOUT LUNARCRUSH
      </button>
      <Popper id={id} open={open} anchorEl={anchorEl} transition>
        {({ TransitionProps }) => (
          <Fade {...TransitionProps} timeout={350}>
            <PaperDiv>
              <iframe width="560" height="315" src="https://www.youtube.com/embed/hcJTcHxHRo0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </PaperDiv>
          </Fade>
        )}
      </Popper>
    </>
  );
}
