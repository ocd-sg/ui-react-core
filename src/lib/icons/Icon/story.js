// @flow
import React from 'react'
import { storiesOf } from '@storybook/react'

import Icon from './index'
import Folder from '../paths/Folder'
import AddCircle from '../paths/AddCircle'
import RemoveCircle from '../paths/RemoveCircle'
import Cancel from '../paths/Cancel'
import ChevronLeft from '../paths/ChevronLeft'
import ChevronRight from '../paths/ChevronRight'
import ExpandLess from '../paths/ExpandLess'
import ExpandMore from '../paths/ExpandMore'

storiesOf('icons.Icon', module)
  .add('basic', () => (
    <div>
      <div className='pa4 f1'>
        <div>.F1</div>
        <Icon className='fill-foreground-100' path={Folder} />
        <Icon className='fill-foreground-100' path={AddCircle} />
        <Icon className='fill-foreground-100' path={RemoveCircle} />
        <Icon className='fill-foreground-100' path={Cancel} />
        <Icon className='fill-foreground-100' path={ChevronLeft} />
        <Icon className='fill-foreground-100' path={ChevronRight} />
        <Icon className='fill-foreground-100' path={ExpandLess} />
        <Icon className='fill-foreground-100' path={ExpandMore} />
      </div>
      <div className='pa4 f3'>
        <div>.F3</div>
        <Icon className='fill-foreground-100' path={Folder} />
        <Icon className='fill-foreground-100' path={AddCircle} />
        <Icon className='fill-foreground-100' path={RemoveCircle} />
        <Icon className='fill-foreground-100' path={Cancel} />
        <Icon className='fill-foreground-100' path={ChevronLeft} />
        <Icon className='fill-foreground-100' path={ChevronRight} />
        <Icon className='fill-foreground-100' path={ExpandLess} />
        <Icon className='fill-foreground-100' path={ExpandMore} />
      </div>
      <div className='pa4 f6'>
        <div>.F6</div>
        <Icon className='fill-foreground-100' path={Folder} />
        <Icon className='fill-foreground-100' path={AddCircle} />
        <Icon className='fill-foreground-100' path={RemoveCircle} />
        <Icon className='fill-foreground-100' path={Cancel} />
        <Icon className='fill-foreground-100' path={ChevronLeft} />
        <Icon className='fill-foreground-100' path={ChevronRight} />
        <Icon className='fill-foreground-100' path={ExpandLess} />
        <Icon className='fill-foreground-100' path={ExpandMore} />
      </div>
    </div>
  ))
