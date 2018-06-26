import styled from 'styled-components'
import { BLUE, TURQOISE, WHITESMOKE, BLACK } from 'src/styles/colors.js'

export const StyledPositionController = styled.div`
  position: relative;
  width: ${props => props.width}px;
  height: ${props => props.height}px;
  overflow: hidden;
  background-color: ${WHITESMOKE};
  border: 1px solid ${BLUE};
  border-radius: ${props => (props.isRound ? '9999px' : '5px')};
  transition: all 1s;
`

export const ListenerHandle = styled.div`
  position: relative;
  z-index: 5;
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 0 8px 18px 8px;
  border-color: transparent transparent ${BLACK} transparent;
  position: absolute;
  text-indent: -9999px;
  overflow: hidden;
  cursor: pointer;
`

export const SourceReach = styled.div`
  position: absolute;
  z-index: ${props => props.isEditing ? 2 : 1};
  width: ${props => props.reach * props.pixelsPerMeter.x}px;
  height: ${props => props.reach * props.pixelsPerMeter.z}px;
  background: ${props => props.isEditing ? 'rgba(243, 36, 106, 0.1)' : '#e8e8eb'};
  border: 1px solid ${props => props.isEditing ? '#f3246a' : 'transparent'};
  border-radius: 100%;
  transform: translate3d(-50%, -50%, 0);
`

export const SourceHandle = styled.div`
  position: absolute;
  z-index: 2;
  width: 18px;
  height: 18px;
  background: ${TURQOISE};
  border-radius: 100%;
  cursor: pointer;
  transform: translate3d(-50%, -50%, 0);
`