function MarkerListViewModel() {
    this.self = this;
    
    self.data = viewData;
}

ko.applyBindings(new MarkerListViewModel());