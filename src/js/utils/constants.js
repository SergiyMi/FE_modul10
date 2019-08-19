'use strict';

const PRIORITY_TYPES = {
    LOW: 0,
    NORMAL: 1,
    HIGH: 2,
  };
  
  const ICON_TYPES = {
    EDIT: 'edit',
    DELETE: 'delete',
    ARROW_DOWN: 'expand_more',
    ARROW_UP: 'expand_less',
  };
  
  const NOTE_ACTIONS = {
    DELETE: 'delete-note',
    EDIT: 'edit-note',
    ISEDIT: false,
    INCREASE_PRIORITY: 'increase-priority',
    DECREASE_PRIORITY: 'decrease-priority',
  };

  const refs = {
    list: document.querySelector('.note-list'),
    form: document.querySelector('.note-editor'),
    title: document.querySelector('input[name="note_title"]'),
    body: document.querySelector('textarea[name="note_body"]'),
    search: document.querySelector('.search-form__input'),
  }

  const MESSAGE = {
    INVALID_VALUE: 'Необходимо заполнить все поля!',
  }

export { PRIORITY_TYPES, refs, ICON_TYPES, NOTE_ACTIONS, MESSAGE };