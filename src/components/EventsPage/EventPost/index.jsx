import React from 'react';
import { formatDate } from '@src/lib/helpers';

const EventPost = ({ eventData }) => {
  return (
    <div className="w-full flex flex-col">
      <h2 className="text-3xl font-semibold pt-2">{eventData.title}</h2>
      {eventData.startDate && (
        <div className="flex flex-col gap-y-2 pt-2">
          {eventData.startDate && (
            <p className="text-text-primary">
              <strong>From:</strong> {formatDate(eventData.startDate)}
            </p>
          )}

          {eventData.endDate && (
            <p className="text-text-primary">
              <strong>To:</strong> {formatDate(eventData.endDate)}
            </p>
          )}
        </div>
      )}

      <div className="pt-4">
        <p>{eventData.description}</p>
      </div>
      {eventData.imageUrl && (
        <div className="pt-8">
          <img
            src={eventData.imageUrl}
            alt={eventData.title + '-image'}
            className="rounded-md w-full"
          />
        </div>
      )}
      <div className="border-b border-slate-400">&nbsp;</div>
    </div>
  );
};

export default EventPost;
