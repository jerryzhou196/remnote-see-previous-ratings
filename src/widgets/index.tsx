import { AppEvents, declareIndexPlugin, ReactRNPlugin, WidgetLocation } from '@remnote/plugin-sdk';

async function onActivate(plugin: ReactRNPlugin) {
  // Show a toast notification to the user.
  await plugin.app.toast('See Previous Ratings installed without errors!');

  await plugin.settings.registerStringSetting({
    id: 'AGAIN_COLOR',
    title: 'Color for when a card is answered again.',
    defaultValue: '#d71f1f',
  });
  await plugin.settings.registerStringSetting({
    id: 'HARD_COLOR',
    title: 'Color for when a card is answered hard.',
    defaultValue: '#ffd301',
  });

  await plugin.settings.registerStringSetting({
    id: 'GOOD_COLOR',
    title: 'Color for when a card is answered good.',
    defaultValue: '#7bb661',
  });

  await plugin.settings.registerStringSetting({
    id: 'EASY_COLOR',
    title: 'Color for when a card is answered easy.',
    defaultValue: '#016b3d',
  });

  await plugin.settings.registerStringSetting({
    id: 'VIEWED_AS_LEECH_COLOR',
    title: 'Color for when a card is viewed as a leech.',
    defaultValue: 'black',
  });

  await plugin.settings.registerStringSetting({
    id: 'RESET_COLOR',
    title: 'Color for when a card is reset.',
    defaultValue: 'white',
  });

  await plugin.settings.registerStringSetting({
    id: 'TOO_EARLY_COLOR',
    title: 'Color for when a card is answered too early.',
    defaultValue: 'white',
  });

  await plugin.storage.setSession('currentCardId', undefined);

  await plugin.app.registerWidget('review_history', WidgetLocation.FlashcardExtraDetail, {
    dimensions: { height: 'auto', width: '100%' },
  });

  plugin.event.addListener(AppEvents.QueueLoadCard, undefined, async (data) => {
    await plugin.storage.setSession('currentCardId', data.cardId);
    console.log(data.cardId);
  });
}

async function onDeactivate(_: ReactRNPlugin) {}

declareIndexPlugin(onActivate, onDeactivate);
