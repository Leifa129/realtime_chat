import React, {Component} from 'react';
import './Quotes.css'

class Quotes extends Component {
    render() {
        return (
            <div>
                <figure className="quote">
                    <blockquote>
                        Adapt or die.
                    </blockquote>
                </figure>

                <figure className="quote">
                    <blockquote>
                        I never lose, I win or I learn.
                    </blockquote>
                </figure>

                <figure className="quote">
                    <blockquote>
                        The most valuable truths are the ones most people don't believe.
                    </blockquote>
                </figure>

                <figure className="quote">
                    <blockquote>
                        True confidence is distinct from results.
                    </blockquote>
                </figure>

            </div>
        );
    }
}

export default Quotes;