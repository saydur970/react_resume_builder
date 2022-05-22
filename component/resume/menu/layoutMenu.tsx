import { useState, useRef, Dispatch, SetStateAction, FC, DragEvent } from 'react';
// types
import { TResumeSectionLayout, TResumeSectionItem, TResumeSectionName } 
from '../types/resume_layout.type';
// styles
import classes from './layoutMenu.module.css';

type TItemTemp = TResumeSectionItem & { from: TResumeSectionName; removedItemIdx: number; }


interface IComp {
  sectionItemList: TResumeSectionLayout;
  setSectionItemList: Dispatch<SetStateAction<TResumeSectionLayout>>
}

const DROP_POSITION_ATTR = 'dropPositionAttr';

export const LayoutMenu: FC<IComp> = ({ sectionItemList, setSectionItemList }) => {


  const [tempList, setTempList] = useState<TItemTemp | null>(null);
  const dropItemIdxRef = useRef<null | number>(null);

  const dragStartHandler =
  (e: DragEvent<HTMLDivElement>, item: TItemTemp) => {
    setTempList({ ...item })
  }


  const dragOverHanlder = (e: DragEvent<HTMLDivElement>, targetListName: TResumeSectionName) => {
    e.preventDefault();

    const targetListLength = sectionItemList[targetListName].length;

    if(targetListLength === 0) {
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

    if(dropItemIdx > targetListLength) {
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


  // ===================== render section list =====================

  const renderItem = (listName: TResumeSectionName, color: string) => {

    return (

      <div className={classes.container} style={{ backgroundColor: color }}
        onDragOver={(e) => dragOverHanlder(e, listName)}
        onDrop={(e) => dropHandler(e, listName)}
        custom-attribute={DROP_POSITION_ATTR}
      >

        {
          Object.keys(sectionItemList[listName]).map((el: any, idx) => {

            const currentItem = sectionItemList[listName][el];

            return (
              <div key={idx} className={classes.item}
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



      </div>

    )

  }


  return (
    <div className={classes.app} >

      {renderItem('activeLeftList', '#ccc')}
      {renderItem('activeRightList', '#ddd')}
      {renderItem('deactiveList', 'gray')}

    </div>
  )


};