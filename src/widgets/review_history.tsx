import {
  renderWidget,
  usePlugin,
  useSessionStorageState,
  RepetitionStatus,
  QueueInteractionScore,
  useTracker,
  Card,
} from '@remnote/plugin-sdk';
import { useEffect, useState } from 'react';
import '../App.css';
let ScoreColor: Record<string, string> = {
  TOO_EARLY: 'white',
  AGAIN: '#c03c1c',
  HARD: '#D8A700',
  GOOD: '#B9D870',
  EASY: '#006344',
  VIEWED_AS_LEECH: 'black',
  RESET: 'white',
};

export function ReviewHistoryComponent() {
  const [card, setCard] = useState<Card | undefined>(undefined);
  const plugin = usePlugin();
  const [cardId] = useSessionStorageState<string | undefined>('currentCardId', undefined);

  for (const key in ScoreColor) {
    const color = useTracker(
      async (reactivePlugin) => await reactivePlugin.settings.getSetting(key + '_COLOR')
    ) as string;
    if (color && ScoreColor[key] != color) ScoreColor[key] = color;
  }

  useEffect(() => {
    const fetchCard = async (id: string | undefined) => {
      return await plugin.card.findOne(id);
    };
    fetchCard(cardId).then((value) => {
      setCard(value);
    });
  }, [cardId]);

  const history: RepetitionStatus[] | undefined = card?.repetitionHistory;

  //for each element within history, print it to the console
  history?.map((element: RepetitionStatus, index: number) => {
    console.log(element);
  });

  let colors: React.ReactNode[] = [];

  history?.map((element: RepetitionStatus, index: number) => {
    colors.push(
      <div
        className="h-[20px] w-[20px] square m-2 rounded-[5px] tooltip"
        key={index}
        style={{ backgroundColor: ScoreColor[QueueInteractionScore[element.score]] }}
      ></div>
    );
  });
  return (
    <div
      className="legend-background h-[50px] w-full flex justify-center"
      style={{ backgroundColor: 'none' }}
    >
      <div className="legend w-auto rounded-[5px] flex justify-center flex-wrap">{colors}</div>
    </div>
  );
}
renderWidget(ReviewHistoryComponent);
