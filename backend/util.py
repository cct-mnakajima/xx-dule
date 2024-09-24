from decimal import Decimal

PATH_PARAMETER_CHANNEL_INFO = '/channel_info'
PATH_PARAMETER_VIDEO_LIST = '/video_list'
PATH_PARAMETER_VIDEO = '/video'
PATH_PARAMETER_VIDEO_FORCE_UPDATE = '/video_force_update'
PATH_PARAMETER_AUTH = '/auth'
PATH_PARAMETER_SCHEDULE_TWEET = '/schedule_tweet'
PATH_PARAMETER_YOUTUBE_VIDEO = '/youtube_video'
PATH_PARAMETER_SYSTEM = '/system'
PATH_PARAMETER_INFORMATION = '/information'

# チャンネル情報の定数
# チャンネルオーナー、チャンネルID、新着動画プレイリストID
channelParams = [
    ('peko','UC1DCedRgGHBdm81E1llLhOQ','UU1DCedRgGHBdm81E1llLhOQ','UUMO1DCedRgGHBdm81E1llLhOQ'),
    ('marin','UCCzUftO8KOVkV4wQG1vkUvg','UUCzUftO8KOVkV4wQG1vkUvg','UUMOCzUftO8KOVkV4wQG1vkUvg'),
    ('holo_office','UCJFZiqLMntJufDCHc6bQixg','UUJFZiqLMntJufDCHc6bQixg','UUMOJFZiqLMntJufDCHc6bQixg'),
    ('other','','','')  # その他の他枠の動画情報のみを持つ物

]

# Json dumps時にDecimalを変換するときのモジュール
def decimal_default_proc(obj):
    if isinstance(obj, Decimal):
        return float(obj)
    raise TypeError


#################################################
# チャンネルオーナー名からチャンネルIDを引く
#################################################
def owner_to_cid(channel_owner):
    for (own , c_id, p_id, mem ) in channelParams:
        if own == channel_owner:
            return c_id

#################################################
# チャンネルオーナー名から新着プレイリストIDを引く
#################################################
def owner_to_pid(channel_owner):
    for (own , c_id, p_id, mem ) in channelParams:
        if own == channel_owner:
            return p_id
        
#################################################
# チャンネルオーナー名から新着プレイリストIDを引く
#################################################
def owner_to_member_only(channel_owner):
    for (own , c_id, p_idm, mem ) in channelParams:
        if own == channel_owner:
            return mem
