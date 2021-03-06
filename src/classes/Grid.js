import { GridItem, ItemType, FolderType } from './GridItem';

export class Grid {
  constructor(element) {
    this.grid = element;
    this.selected = [];
  }

  AddNote(title, content) {
    const gridItem = new GridItem();
    gridItem.CreateNote(title, content);
    this.currentDir.notes.push(gridItem);
    this.Redraw();

    console.log('Note added');
  }

  AddFolder(title) {
    const gridItem = new GridItem();
    const backFolder = new GridItem();

    gridItem.CreateFolder(FolderType.folder, title);
    backFolder.CreateFolder(FolderType.backFolder, '...');

    gridItem.folders.push(backFolder);

    this.currentDir.folders.push(gridItem);
    this.currentDir.folders.sort((a, b) => (a.Title > b.Title ? 1 : -1));

    this.Redraw();

    console.log('Folder added');
  }

  RemoveItem(item) {
    switch (item.itemType) {
      case ItemType.note:
        this.currentDir.notes.splice(this.currentDir.notes.indexOf(item), 1);
        break;
      case ItemType.folder:
        this.currentDir.folders.splice(this.currentDir.folders.indexOf(item), 1);
        break;
    }
    this.Redraw();
  }

  Redraw() {
    this.grid.innerHTML = '';
    this.currentDir.folders &&
      this.currentDir.folders.forEach(f => {
        if (f.folderType === FolderType.backFolder) {
          f.Element.style.backgroundImage = 'url(./src/images/back.svg)';
          this.grid.insertAdjacentElement('afterbegin', f.Element);
        } else {
          this.grid.appendChild(f.Element);
        }
      });
    this.currentDir.notes &&
      this.currentDir.notes.forEach(n => {
        this.grid.appendChild(n.Element);
      });
  }

  get Element() {
    return this.grid;
  }

  get CurrentDir() {
    return this.currentDir;
  }

  set CurrentDir(folder) {
    this.currentDir = folder;
    this.Redraw();
  }

  get Selected() {
    return this.selected;
  }

  isSelected(record) {
    return this.selected.includes(record);
  }

  Select(record) {
    record.Element.querySelector('.checkbox').checked = true;
    this.selected.push(record);
  }

  Unselect(record) {
    record.Element.querySelector('.checkbox').checked = false;
    this.selected.splice(this.selected.indexOf(record), 1);
  }

  UnselectAll() {
    for (let record of this.selected) {
      this.Unselect(record);
    }
  }
}
