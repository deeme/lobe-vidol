import { ActionIcon } from '@lobehub/ui';
import { createStyles } from 'antd-style';
import classNames from 'classnames';
import { Volume2, VolumeXIcon } from 'lucide-react';
import { useTranslation } from 'react-i18next';

import { DESKTOP_HEADER_ICON_SIZE } from '@/constants/token';
import { toggleVoice } from '@/services/chat';
import { useSessionStore } from '@/store/session';

const useStyles = createStyles(({ token, css }) => ({
  voice: css`
    cursor: pointer;
    transition: color 0.3s;
  `,
  voiceOn: css`
    color: ${token.colorLinkActive};
  `,
}));

const VoiceSwitch = () => {
  const { styles } = useStyles();
  const [voiceOn] = useSessionStore((s) => [s.voiceOn]);
  const { t } = useTranslation('chat');
  return (
    <ActionIcon
      className={classNames(styles.voice, voiceOn && styles.voiceOn)}
      icon={voiceOn ? Volume2 : VolumeXIcon}
      onClick={toggleVoice}
      size={DESKTOP_HEADER_ICON_SIZE}
      title={t('tts.combine')}
    />
  );
};

export default VoiceSwitch;
