/**
 * api接口统一管理
 */
import { get, post } from './http'

export const androidBanner = params => get('banner', params) //banner

export const recommondSheet = params => get('personalized', params) //推荐歌单

export const recommondMv = params => get('personalized/mv', params) //推荐MV

export const playListDetail = params => get('playlist/detail', params) //歌单信息

export const songDetail = params => get('song/detail', params) //歌曲信息

export const albumSheet = params => get('top/album', params) //新碟歌单

export const commentList = params => get('comment/playlist', params) //歌单评论
