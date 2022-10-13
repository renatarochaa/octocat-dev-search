import React from 'react'

import Card from '../../atoms/card'
import Link from '../../atoms/link'
import SkeletonItem from '../../atoms/skeletonItem'
import InfoContainer from '../userInfo/styles'
import LinksContainer from '../userLinks/styles'

const CardSkeleton = () => (
    <Card className="profile">
        <div className="user-info">
            <SkeletonItem image />
            <InfoContainer>
                <div className="info-container__title">
                    <SkeletonItem width="15rem" height="2.5rem" />
                    <SkeletonItem width="12rem" height="1.5rem" className="info-container__joindate" />
                </div>
                <div className="info-container__bio">
                    <SkeletonItem width="8rem" height="1rem" className="info-container__username" />
                    <SkeletonItem width="17rem" height="2rem" />
                </div>
            </InfoContainer>
        </div>
        <div className="user-links">
            <Card className="user-data">
                <div className="user-data__item">
                    <SkeletonItem width="3rem" height="0.8rem" margin="0 0 0.8rem 0" />
                    <SkeletonItem width="4rem" height="2.5rem" />
                </div>
                <div className="user-data__item">
                    <SkeletonItem width="3rem" height="0.8rem" margin="0 0 0.8rem 0" />
                    <SkeletonItem width="4rem" height="2.5rem" />
                </div>
                <div className="user-data__item">
                    <SkeletonItem width="3rem" height="0.8rem" margin="0 0 0.8rem 0" />
                    <SkeletonItem width="4rem" height="2.5rem" />
                </div>
            </Card>
            <LinksContainer>
                <div>
                    <Link>
                        <SkeletonItem width="2rem" height="2rem" margin="0 1rem 0 0" />
                        <SkeletonItem width="10rem" height="1.5rem" />
                    </Link>
                    <Link>
                        <SkeletonItem width="2rem" height="2rem" margin="0 1rem 0 0" />
                        <SkeletonItem width="10rem" height="1.5rem" />
                    </Link>
                </div>
                <div>
                    <Link>
                        <SkeletonItem width="2rem" height="2rem" margin="0 1rem 0 0" />
                        <SkeletonItem width="10rem" height="1.5rem" />
                    </Link>
                    <Link>
                        <SkeletonItem width="2rem" height="2rem" margin="0 1rem 0 0" />
                        <SkeletonItem width="10rem" height="1.5rem" />
                    </Link>
                </div>
            </LinksContainer>
        </div>
    </Card>
)

export default CardSkeleton