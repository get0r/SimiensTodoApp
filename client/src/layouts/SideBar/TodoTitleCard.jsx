import React from 'react';
import PropTypes from 'prop-types';

import { ContainerType, TypographyType } from '../../assets/styles/theme';

const TodoTitleCard = ({ title, desc }) => {
    return (
        <div class={ ContainerType.flexCenter }>
            <div class="bg-white rounded-lg overflow-hidden shadow-lg">
                <div class={ ContainerType.paddedContainer }>
                    <div class={ TypographyType.lgText }>The Coldest Sunset</div>
                    <p class={ TypographyType.nameText }>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et
                        perferendis eaque, exercitationem praesentium nihil.
                    </p>
                </div>
                <div class={ ContainerType.paddedContainer }>
                    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-xs font-semibold text-gray-700 mr-2">Not Completed</span>
                </div>
            </div>
        </div>
    );
};

TodoTitleCard.propTypes = {
    title: PropTypes.string,
    desc: PropTypes.string,
};

export default TodoTitleCard;
