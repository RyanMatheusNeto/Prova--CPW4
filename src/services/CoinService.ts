import axios, { AxiosInstance } from 'axios'
import Coin from '../models/Coin'

export default class CoinService {
  private _http: AxiosInstance
  private _endpoint: string
  private _perPage: number
  private _priceChangePercentage: string
  private _coins: Coin[]

  constructor() {
    const urlApi = process.env.REACT_APP_API_URL
    this._http = axios.create({
      baseURL: urlApi,
    })

    this._endpoint = process.env.REACT_APP_COIN_PRICES_ENDPOINT as string
    this._perPage = parseInt(process.env.REACT_APP_PER_PAGE as string) 
    this._priceChangePercentage = process.env.REACT_APP_PRICE_CHANGE_PERCENTAGE as string

    this._coins = []
  }

  async loadCoins(vsCurrency: string) {
    this._coins = []
    const response = await this._http(this._endpoint, {
      params: {
        vs_currency: vsCurrency,
        per_page: this._perPage,
        price_change_percentage: this._priceChangePercentage,
      },
    })

    try {
      if (response.status == 200) {
        const { data } = response
        this._coins = data.map((obj: any) => new Coin(obj))
      }
    } catch(err) {
      console.log(err)
    }

    return this._coins
  }

  filterCoins(filter: string) {
    const sanitizedFilter = filter.trim().toLowerCase()

    if (!sanitizedFilter) {
      return this._coins
    }

    return this._coins.filter((c) => {
      return (
        c.name.toLowerCase().includes(sanitizedFilter) ||
        c.symbol.toLowerCase().includes(sanitizedFilter)
      )
    })
  }
}
