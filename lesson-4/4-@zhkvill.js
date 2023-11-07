'use strict';

class PaginationHelper {
  constructor(items, maxItemOnPage) {
    this._maxItemOnPage = maxItemOnPage;
    this._itemCount = items.length;
  }

  pageCount() {
    return Math.ceil(this._itemCount / this._maxItemOnPage);
  }

  itemCount() {
    return this._itemCount;
  }

  pageItemCount(pageNum) {
    if (pageNum < 0) return -1;
    const itemsBeforePage = pageNum * this._maxItemOnPage;
    const leftItems = this._itemCount - itemsBeforePage;

    if (leftItems <= 0) return -1;
    return leftItems > this._maxItemOnPage ? this._maxItemOnPage : leftItems;
  }

  pageIndex(itemIndex) {
    if (itemIndex < 0 || itemIndex >= this._itemCount) return -1;

    let pageIndex = 0;
    for (let i = this._maxItemOnPage; i <= itemIndex; i += this._maxItemOnPage) {
      pageIndex++;
    }
    return pageIndex;
  }
}


const helper = new PaginationHelper(['a', 'b', 'c', 'd', 'e', 'f'], 4);

// pageIndex takes an item index and returns the page that it belongs on
console.log(helper.pageIndex(5)); // should == 1 (zero based index)
console.log(helper.pageIndex(2)); // should == 0
console.log(helper.pageIndex(20)); // should == -1
console.log(helper.pageIndex(-10)); // should == -1
