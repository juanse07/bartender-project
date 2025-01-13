import { ArrowLeft, ArrowRight } from 'lucide-react';
import { useRouter } from 'next/router';
import { useEffect, useRef, useState } from 'react';
import styles from '../../../styles/EventQuestionnaire.module.css';
import { FormData, Question } from './types';

const EventQuestionnaire = () => {
  const router = useRouter();
  const [currentSlide, setCurrentSlide] = useState(0);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [formData, setFormData] = useState<FormData>({
    eventType: '',
    eventTypeOther: '',
    guestCount: '',
    guestCountOther: '',
    eventDate: '',
    eventTime: {
      start: '',
      end: ''
    },
    notes: ''
  });

  const scrollToTop = () => {
    console.log('Wrapper ref:', wrapperRef.current);
    if (wrapperRef.current) {
      wrapperRef.current.scrollTo({ top: 0, behavior: 'instant' });
      console.log('Scrolled using ref');
    } else {
      window.scrollTo({ top: 0, behavior: 'instant' });
      console.log('Scrolled using window');
    }
  };

  const handleSubmit = async () => {
    console.log('Form submitted:', formData);
    await router.push('/estimate-event', undefined, { shallow: true });
  };

  // Listen for route changes to scroll to top
  useEffect(() => {
    const handleRouteChange = () => {
      scrollToTop();
    };

    router.events.on('routeChangeComplete', handleRouteChange);

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);
  const questions: Question[] = [
    {
      id: 'eventType',
      title: 'What type of event are you planning?',
      type: 'select',
      options: [
        'Wedding',
        'Holiday Party',
        'Corporate Event',
        'Birthday Party',
        'Engagement Party',
        'Charity Gala or Fundraiser',
        'Community Event',
        'Retirement Party',
        'Private Dinner Party',
        'Other'
      ]
    },
    {
      id: 'guestCount',
      title: 'How many guests are you expecting?',
      type: 'select',
      options: [
        '1-10',
        '11-25',
        '26-40',
        '41-60',
        '61-75',
        '75-100',
        '101-125',
        '125-150',
        '150-200',
        '200-300',
        '300-500',
        '500+',
        'Other'
      ]
    },
    {
      id: 'eventDate',
      title: 'When is your event?',
      type: 'date'
    },
    {
      id: 'eventTime',
      title: 'What time will your event start and end?',
      type: 'time'
    },
    {
      id: 'notes',
      title: 'Any additional details we should know?',
      type: 'textarea'
    }
  ];

  const handleInputChange = (
    questionId: keyof FormData,
    value: string | { start: string; end: string }
  ) => {
    setFormData(prev => ({
      ...prev,
      [questionId]: value
    }));
  };

  const handleNext = () => {
    if (currentSlide === questions.length - 1) {
      router.push('/estimate-event', undefined, { shallow: true });
    } else {
      setCurrentSlide(prev => Math.min(questions.length - 1, prev + 1));
      scrollToTop();
    }
  };

  const handlePrevious = () => {
    setCurrentSlide(prev => Math.max(0, prev - 1));
    scrollToTop();
  };

  const renderQuestion = (question: Question) => {
    switch (question.type) {
      case 'select':
        return (
          <>
          <div className={styles.optionsContainer}  >
            {question.options?.map((option: string) => (
              <div key={option}>
                <button
                  onClick={() => handleInputChange(question.id, option)}
                  className={
                    formData[question.id] === option
                      ? styles.optionButtonSelected
                      : styles.optionButton
                  }
                >
                  {option}
                </button>
                {option === 'Other' && formData[question.id] === 'Other' && (
                  <div className={styles.inputContainer}>
                    <input
                      type="text"
                      placeholder={
                        question.id === 'eventType' 
                          ? "Please specify your event type" 
                          : "Please specify number of guests"
                      }
                      className={styles.otherInput}
                      value={formData[`${question.id}Other`] as string}
                      onChange={(e) => handleInputChange(`${question.id}Other` as keyof FormData, e.target.value)}
                      style={{
                        backgroundColor: '#000000',
                        color: 'rgba(253, 224, 71, 0.9)'
                      }}
                    />
                  </div>
                )}
              </div>
            ))}
          </div>
          </>
        );

      case 'date':
        return (
          <input
            type="date"
            className={styles.input}
            value={formData[question.id] as string}
            onChange={(e) => handleInputChange(question.id, e.target.value)}
          />
        );

      case 'time':
        return (
          <div className={styles.timeContainer}>
            <div className={styles.timeRow}>
              <label className={styles.timeLabel}>Start:</label>
              <input
                type="time"
                className={styles.input}
                value={formData.eventTime.start}
                onChange={(e) => 
                  handleInputChange('eventTime', {
                    ...formData.eventTime,
                    start: e.target.value
                  })
                }
              />
            </div>
            <div className={styles.timeRow}>
              <label className={styles.timeLabel}>End:</label>
              <input
                type="time"
                className={styles.input}
                value={formData.eventTime.end}
                onChange={(e) => 
                  handleInputChange('eventTime', {
                    ...formData.eventTime,
                    end: e.target.value
                  })
                }
              />
            </div>
          </div>
        );

      case 'textarea':
        return (
          <textarea
            className={styles.textarea}
            value={formData[question.id] as string}
            onChange={(e) => handleInputChange(question.id, e.target.value)}
            placeholder="Share any specific requirements or preferences..."
          />
        );
    }
  };

  return (
    <div className={styles.container} >
      <div className={styles.wrapper} ref={wrapperRef} >
        <div className={styles.progressContainer}>
          <div className={styles.progressBar}>
            <div
              className={styles.progressFill}
              style={{
                width: `${((currentSlide + 1) / questions.length) * 100}%`
              }}
            />
          </div>
        </div>

        <div className={styles.contentWrapper}>
          <h2 className={styles.title}>
            {questions[currentSlide].title}
          </h2>

          {renderQuestion(questions[currentSlide])}
        </div>

        <div className={styles.buttonsContainer}>
          <button
            onClick={handlePrevious}
              // setCurrentSlide(prev => Math.max(0, prev - 1));
              // window.scroll(0, 0);
              
            
            disabled={currentSlide === 0}
            className={styles.buttonPrev}
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Previous
          </button>

          <button
            onClick={() => {
              if (currentSlide === questions.length - 1) {
                handleSubmit();
              } else {
                handleNext();
             
              }
            }}
            className={styles.buttonNext}
          >
            {currentSlide === questions.length - 1 ? 'Submit' : 'Next'}
            {currentSlide !== questions.length - 1 && (
              <ArrowRight className="w-4 h-4 ml-2" />
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default EventQuestionnaire;