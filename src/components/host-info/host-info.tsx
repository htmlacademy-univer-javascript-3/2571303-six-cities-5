import { Offer } from '../../types/offer.ts';

type HostInfoProps = {
  host: Offer['host'];
  description: string;
};

function HostInfo({ host, description }: HostInfoProps) {
  if (!host) {
    return (
      <div className="offer__host">
        <h2 className="offer__host-title">Host information not available</h2>
        <p className="offer__text">No host information provided.</p>
      </div>
    );
  }
  return (
    <div className="offer__host">
      <h2 className="offer__host-title">Meet the host</h2>
      <div className="offer__host-user user">
        <div className={`offer__avatar-wrapper ${host.isPro ? 'offer__avatar-wrapper--pro' : ''} user__avatar-wrapper`}>
          <img className="offer__avatar user__avatar" src={host.avatarUrl} width="74" height="74" alt="Host avatar" />
        </div>
        <span className="offer__user-name">{host.name}</span>
        {host.isPro && <span className="offer__user-status">Pro</span>}
      </div>
      <div className="offer__description">
        {description.split('\n').map((text) => (
          <p key={text} className="offer__text">{text}</p>
        ))}
      </div>
    </div>
  );
}

export default HostInfo;
