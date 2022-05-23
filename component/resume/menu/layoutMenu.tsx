/** @jsxImportSource @emotion/react */
import { useState, useRef, Dispatch, SetStateAction, FC, DragEvent } from 'react';
import { Grid } from '@mui/material';
import { Typo } from '../../shared/typo';
// types
import { TResumeSectionLayout, TResumeSectionItem, TResumeSectionName }
  from '../types/resume_layout.type';
// styles
import { layoutMenuStyles } from './layoutMenu.style';

type TItemTemp = TResumeSectionItem & { from: TResumeSectionName; removedItemIdx: number; }


interface IComp {
  sectionItemList: TResumeSectionLayout;
  setSectionItemList: Dispatch<SetStateAction<TResumeSectionLayout>>
}

const DROP_POSITION_ATTR = 'dropPositionAttr';

export const LayoutMenu: FC<IComp> = ({ sectionItemList, setSectionItemList }) => {

  const [tempList, setTempList] = useState<TItemTemp | null>(null);
  const dropItemIdxRef = useRef<null | number>(null);
  const classes = layoutMenuStyles();

  const dragStartHandler =
    (e: DragEvent<HTMLDivElement>, item: TItemTemp) => {
      setTempList({ ...item })
    }


  const dragOverHanlder = (e: DragEvent<HTMLDivElement>, targetListName: TResumeSectionName) => {
    e.preventDefault();

    const targetListLength = sectionItemList[targetListName].length;

    if (targetListLength === 0) {
      dropItemIdxRef.current = 0;
      return null;
    }

    // @ts-ignore
    const targetAttr = e.target.getAttribute('custom-attribute');

    // check targetAttr
    if (!tempList || !targetAttr || typeof targetAttr !== 'string' ||
      !targetAttr.startsWith(DROP_POSITION_ATTR)) {
      return null;
    }

    const currentdropItemIdx = dropItemIdxRef.current;

    // if current dropItemIdxRef is number and targetAttr === DROP_POSITION_ATTR
    // then return null
    if (currentdropItemIdx !== null && targetAttr === DROP_POSITION_ATTR) {
      return null;
    }

    let dropItemIdx: number | null = null;

    let tempIdx = targetAttr.split('_')[1];
    if (tempIdx) {
      dropItemIdx = Number(tempIdx) + 1;
    }

    if (!dropItemIdx) return null;

    if (dropItemIdx > targetListLength) {
      dropItemIdx = targetListLength - 1;
    }

    // if drop and drag list are same
    if (tempList.from === targetListName) {
      dropItemIdx = dropItemIdx - 1;
    }


    dropItemIdxRef.current = dropItemIdx;

  }



  const dropHandler = (e: DragEvent<HTMLDivElement>, targetListName: TResumeSectionName) => {

    e.preventDefault();

    const dropItemIdx = dropItemIdxRef.current;
    if (dropItemIdx === null) {
      return null;
    }

    if (!tempList) {
      return null;
    }

    // remove drag item from drag list
    const currentDragList = [...sectionItemList[tempList.from]];
    currentDragList.splice(tempList.removedItemIdx, 1);


    if (tempList.from === targetListName) {

      // // add new item on drop list
      currentDragList.splice(dropItemIdx, 0, { sectionName: tempList.sectionName });

      // // update itemList
      setSectionItemList({
        ...sectionItemList,
        [tempList.from]: [...currentDragList]
      })


    }

    // dropList = whrere item will droped
    // add new item on dropList
    const prevDropList = sectionItemList[targetListName];

    // // add new item on drop list
    let newDropList = [...prevDropList];
    newDropList.splice(dropItemIdx, 0, { sectionName: tempList.sectionName });

    // // update itemList
    setSectionItemList({
      ...sectionItemList,
      [targetListName]: [...newDropList],
      [tempList.from]: [...currentDragList]
    })


  }



  /*
  
    const renderItem = (listName: TResumeSectionName, cssObj: {[key: string]: any} ) => {

    let xsW = 2;
    if(listName === 'activeLeftList' || listName === 'activeRightList') {
      xsW = 3;
    }
    else if(listName === 'deactiveList') {
      xsW = 6;
    }

    return (

      <Grid item xs={xsW} container alignItems="center"
        css={cssObj} 
        onDragOver={(e) => dragOverHanlder(e, listName)}
        onDrop={(e) => dropHandler(e, listName)}
        custom-attribute={DROP_POSITION_ATTR}
      >

        {
          Object.keys(sectionItemList[listName]).map((el: any, idx) => {

            const currentItem = sectionItemList[listName][el];

            return (
              <Grid key={idx} 
                sx={{width: '6rem'}}
              css={classes.item}
                draggable={true}
                custom-attribute={`${DROP_POSITION_ATTR}_${idx}`}
                onDragStart={(e) => dragStartHandler(e, {
                  ...currentItem, from: listName, removedItemIdx: idx
                })}
              >
                <Typo txt={currentItem.sectionName} dotted={true} size="1rem" />
              </Grid>
            )

          })
        }



      </Grid>

    )

  }
  
  */


  // ===================== render section list =====================

  const renderItem = (listName: TResumeSectionName) => {

    return Object.keys(sectionItemList[listName]).map((el: any, idx) => {

      const currentItem = sectionItemList[listName][el];

      if(listName === 'deactiveList') {
        return (
          <Grid key={idx} item xs={3}
            css={classes.item}
            draggable={true}
            custom-attribute={`${DROP_POSITION_ATTR}_${idx}`}
            onDragStart={(e) => dragStartHandler(e, {
              ...currentItem, from: listName, removedItemIdx: idx
            })}
          >
            <Typo txt={currentItem.sectionName} dotted={true} size="1rem"
              align="center"
            />
          </Grid>
        )
      }

      return (
        <div key={idx} 
        style={{flex: '1 1 auto', width: '80%'}}
        css={classes.item}
        draggable={true}
        custom-attribute={`${DROP_POSITION_ATTR}_${idx}`}
        onDragStart={(e) => dragStartHandler(e, {
          ...currentItem, from: listName, removedItemIdx: idx
        })}
      >
        {currentItem.sectionName}
      </div>
      )

    })

  }


  return (
    <Grid item xs={12} container justifyContent="space-between" alignItems="flex-start"
      sx={{marginTop: '3rem'}}
    >

      {/* // ================ Layout part ======================== */}
      <Grid item xs={6} container sx={{ backgroundColor: '#ccc', minHeight: '30rem' }} >

        {/* ============= left part ============= */}
        <Grid item xs={6} container alignItems="center" flexDirection="column"
          onDragOver={(e) => dragOverHanlder(e, 'activeLeftList')}
          onDrop={(e) => dropHandler(e, 'activeLeftList')}
          custom-attribute={DROP_POSITION_ATTR}
        >
          {renderItem('activeLeftList')}
        </Grid>

        {/* ============= right part ============= */}
        <Grid item xs={6} container alignItems="center" flexDirection="column"
          onDragOver={(e) => dragOverHanlder(e, 'activeRightList')}
          onDrop={(e) => dropHandler(e, 'activeRightList')}
          custom-attribute={DROP_POSITION_ATTR}
        >
          {renderItem('activeRightList')}
        </Grid>

      </Grid>


      {/* // ================ deactive part ======================== */}
      <Grid item xs={5} container alignItems="flex-start"
        onDragOver={(e) => dragOverHanlder(e, 'deactiveList')}
        onDrop={(e) => dropHandler(e, 'deactiveList')}
        custom-attribute={DROP_POSITION_ATTR}
        sx={{ backgroundColor: 'gray', minHeight: '30rem'}}
      >
        {renderItem('deactiveList')}
      </Grid>

    </Grid>
  )


  // return (
  //   <Grid item xs={12} container >

  //     {renderItem('activeLeftList', classes.container )}
  //     {renderItem('activeRightList', classes.container)}
  //     {renderItem('deactiveList', {...classes.container, ...classes.containerDeactive})}

  //   </Grid>
  // )


};