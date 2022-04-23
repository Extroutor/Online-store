import {makeAutoObservable} from "mobx";

export default class DeviceStore {
    constructor() {
        this._types = [
            {id: 1, name: "Холодильники"},
            {id: 2, name: "Смартфоны"}
        ]
        this._brands = [
            {id: 1, name: "Samsung"},
            {id: 2, name: "Apple"}
        ]
        this._devices = [
            {id: 1, name: "Iphone 12 pro", price: 25000, rating: 5, img: '9922ee81-db5f-4b74-9470-c2f45ac08881.jpg'},
            {id: 1, name: "Iphone 12 pro", price: 25000, rating: 5, img: '9922ee81-db5f-4b74-9470-c2f45ac08881.jpg'},
            {id: 1, name: "Iphone 12 pro", price: 25000, rating: 5, img: '9922ee81-db5f-4b74-9470-c2f45ac08881.jpg'},
            {id: 1, name: "Iphone 12 pro", price: 25000, rating: 5, img: '9922ee81-db5f-4b74-9470-c2f45ac08881.jpg'}
        ]
        makeAutoObservable(this)
    }


    setTypes(types) {
        this._types = types
    }
    setBrands(brands) {
        this._brands = brands
    }
    setDevices(devices) {
        this._devices = devices
    }

    setSelectedType(type) {
        this.setPage(1)
        this._selectedType = type
    }
    setSelectedBrand(brand) {
        this.setPage(1)
        this._selectedBrand = brand
    }
    setPage(page) {
        this._page = page
    }
    setTotalCount(count) {
        this._totalCount = count
    }

    get types() {
        return this._types
    }
    get brands() {
        return this._brands
    }
    get devices() {
        return this._devices
    }
    get selectedType() {
        return this._selectedType
    }
    get selectedBrand() {
        return this._selectedBrand
    }
    get totalCount() {
        return this._totalCount
    }
    get page() {
        return this._page
    }
    get limit() {
        return this._limit
    }
}