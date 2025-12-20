\<\!DOCTYPE html\>  
\<html lang="en"\>  
\<head\>  
    \<meta charset="UTF-8"\>  
    \<meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no, user-scalable=yes"\>  
    \<meta name="description" content="Transform your home service business with AI automation. Get 847% ROI, capture after-hours leads, and automate scheduling with our proven AI system."\>  
    \<meta name="theme-color" content="\#00d4ff"\>  
    \<title\>The AI Powerhouse \- Transform Your Home Service Business\</title\>  
    \<style\>  
        \* {  
            margin: 0;  
            padding: 0;  
            box-sizing: border-box;  
        }

        :root {  
            \--primary: \#11111a;  
            \--secondary: \#1a1a2e;  
            \--accent: \#00d4ff;  
            \--purple: \#6366f1;  
            \--success: \#10b981;  
            \--warning: \#f59e0b;  
            \--danger: \#ef4444;  
            \--text: \#ffffff;  
            \--text-dim: \#a1a1aa;  
            \--border: rgba(161, 161, 170, 0.2);  
            \--gradient: linear-gradient(135deg, rgba(0, 212, 255, 0.1), rgba(99, 102, 241, 0.1));  
        }

        body {  
            font-family: \-apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif;  
            background: var(--primary);  
            color: var(--text);  
            line-height: 1.6;  
            overflow-x: hidden;  
            font-size: 16px;  
        }

        .container {  
            max-width: 1000px; /\* Reduced from 1200px \*/  
            margin: 0 auto;  
            padding: 0 20px; /\* Reduced from 24px \*/  
        }

        /\* Header with Navigation \*/  
        .header {  
            position: fixed;  
            top: 0;  
            left: 0;  
            right: 0;  
            width: 100vw;  
            background: rgba(17, 17, 26, 0.95);  
            backdrop-filter: blur(10px);  
            border-bottom: 1px solid var(--border);  
            z-index: 1000;  
            transition: all 0.3s ease;  
        }

        .nav {  
            max-width: 1000px; /\* Reduced from 1200px \*/  
            margin: 0 auto;  
            padding: 12px 20px; /\* Reduced from 16px 24px \*/  
            display: flex;  
            justify-content: space-between;  
            align-items: center;  
        }

        .logo {  
            display: flex;  
            align-items: center;  
            gap: 10px; /\* Reduced from 12px \*/  
            font-size: 20px; /\* Reduced from 24px \*/  
            font-weight: 700;  
            color: var(--text);  
        }

        .logo img {  
            width: 28px; /\* Reduced from 32px \*/  
            height: 28px;  
            object-fit: contain;  
        }

        img {  
            max-width: 100%;  
            height: auto;  
            display: block;  
        }

        html {  
            scroll-behavior: smooth;  
        }

        @media (prefers-reduced-motion: reduce) {  
            html {  
                scroll-behavior: auto;  
            }  
              
            \* {  
                animation-duration: 0.01ms \!important;  
                animation-iteration-count: 1 \!important;  
                transition-duration: 0.01ms \!important;  
            }  
        }

        .logo-text {  
            background: linear-gradient(135deg, var(--accent), var(--purple));  
            \-webkit-background-clip: text;  
            \-webkit-text-fill-color: transparent;  
            background-clip: text;  
        }

        .nav-links {  
            display: flex;  
            gap: 24px; /\* Reduced from 32px \*/  
            align-items: center;  
        }

        .nav-toggle {  
            display: none;  
            flex-direction: column;  
            cursor: pointer;  
            padding: 8px;  
            border-radius: 4px;  
            transition: background 0.3s ease;  
        }

        .nav-toggle:hover {  
            background: rgba(0, 212, 255, 0.1);  
        }

        .nav-toggle span {  
            width: 24px;  
            height: 3px;  
            background: var(--text);  
            margin: 3px 0;  
            border-radius: 2px;  
            transition: all 0.3s ease;  
        }

        .nav-toggle.active span:nth-child(1) {  
            transform: rotate(45deg) translate(9px, 9px);  
        }

        .nav-toggle.active span:nth-child(2) {  
            opacity: 0;  
        }

        .nav-toggle.active span:nth-child(3) {  
            transform: rotate(-45deg) translate(7px, \-6px);  
        }

        .nav-mobile {  
            display: none;  
            position: absolute;  
            top: 100%;  
            left: 0;  
            right: 0;  
            background: var(--primary);  
            border-bottom: 1px solid var(--border);  
            padding: 20px 24px;  
            flex-direction: column;  
            gap: 20px;  
        }

        .nav-mobile.active {  
            display: flex;  
        }

        .nav-link {  
            color: var(--text-dim);  
            text-decoration: none;  
            transition: color 0.3s ease;  
            font-size: 14px; /\* Added explicit size \*/  
        }

        .nav-link:hover {  
            color: var(--accent);  
        }

        .nav-cta {  
            background: linear-gradient(135deg, var(--accent), var(--purple));  
            color: white;  
            padding: 10px 20px; /\* Reduced from 12px 24px \*/  
            border-radius: 8px;  
            text-decoration: none;  
            font-weight: 600;  
            font-size: 14px;  
            transition: transform 0.3s ease;  
        }

        .nav-cta:hover {  
            transform: translateY(-2px);  
        }

        /\* Enhanced Hero Section \*/  
        .hero {  
            padding: 100px 0 60px; /\* Reduced from 120px 0 80px \*/  
            text-align: center;  
            position: relative;  
            background: radial-gradient(ellipse at center, rgba(0, 212, 255, 0.1) 0%, transparent 70%);  
        }

        .hero-badge {  
            display: inline-flex;  
            align-items: center;  
            gap: 6px; /\* Reduced from 8px \*/  
            background: rgba(0, 212, 255, 0.1);  
            border: 1px solid rgba(0, 212, 255, 0.3);  
            padding: 6px 14px; /\* Reduced from 8px 16px \*/  
            border-radius: 20px; /\* Reduced from 24px \*/  
            margin-bottom: 24px; /\* Reduced from 32px \*/  
            font-size: 13px; /\* Reduced from 14px \*/  
            color: var(--accent);  
        }

        .hero h1 {  
            font-size: clamp(2rem, 4vw, 3.2rem); /\* Reduced from clamp(2.5rem, 5vw, 4rem) \*/  
            font-weight: 700;  
            margin-bottom: 20px; /\* Reduced from 24px \*/  
            background: linear-gradient(135deg, var(--text), var(--accent), var(--purple));  
            \-webkit-background-clip: text;  
            \-webkit-text-fill-color: transparent;  
            background-clip: text;  
            line-height: 1.1;  
        }

        .hero-subtitle {  
            font-size: 1.1rem; /\* Reduced from 1.25rem \*/  
            color: var(--text-dim);  
            margin-bottom: 32px; /\* Reduced from 40px \*/  
            max-width: 550px; /\* Reduced from 600px \*/  
            margin-left: auto;  
            margin-right: auto;  
        }

        /\* Enhanced CTA Buttons \*/  
        .hero-ctas {  
            display: flex;  
            gap: 16px; /\* Reduced from 20px \*/  
            justify-content: center;  
            flex-wrap: wrap;  
        }

        .btn {  
            display: inline-flex;  
            align-items: center;  
            gap: 6px; /\* Reduced from 8px \*/  
            padding: 14px 28px; /\* Reduced from 18px 36px \*/  
            border-radius: 10px; /\* Reduced from 12px \*/  
            font-size: 16px; /\* Reduced from 18px \*/  
            font-weight: 600;  
            text-decoration: none;  
            cursor: pointer;  
            transition: all 0.3s ease;  
            border: none;  
            position: relative;  
            overflow: hidden;  
        }

        .btn-primary {  
            background: linear-gradient(135deg, var(--accent), var(--purple));  
            color: white;  
            box-shadow: 0 4px 20px rgba(0, 212, 255, 0.3);  
        }

        .btn-primary:hover {  
            transform: translateY(-3px);  
            box-shadow: 0 8px 30px rgba(0, 212, 255, 0.4);  
        }

        .btn-secondary {  
            background: transparent;  
            color: var(--text);  
            border: 2px solid var(--border);  
            backdrop-filter: blur(10px);  
        }

        .btn-secondary:hover {  
            border-color: var(--accent);  
            background: rgba(0, 212, 255, 0.1);  
        }

        /\* Enhanced Social Proof \*/  
        .social-proof {  
            margin: 32px 0; /\* Reduced from 40px 0 \*/  
            padding: 32px; /\* Reduced from 40px \*/  
            background: var(--gradient);  
            border: 1px solid var(--border);  
            border-radius: 14px; /\* Reduced from 16px \*/  
        }

        .proof-stat {  
            text-align: center;  
        }

        .proof-number {  
            font-size: 36px; /\* Reduced from 48px \*/  
            font-weight: 700;  
            color: var(--accent);  
            font-family: monospace;  
            display: block;  
        }

        .proof-label {  
            font-size: 12px; /\* Reduced from 14px \*/  
            color: var(--text-dim);  
            margin-top: 6px; /\* Reduced from 8px \*/  
        }

        /\* AI Form Section \*/  
        .ai-form-section {  
            padding: 60px 0;  
            background: var(--secondary);  
        }

        .ai-form-container {  
            max-width: 800px; /\* Increased from 700px for desktop \*/  
            margin: 0 auto;  
            background: var(--gradient);  
            border: 1px solid var(--border);  
            border-radius: 20px;  
            padding: 40px;  
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);  
        }

        /\* Unified Form Styles \*/  
        .form-header {  
            margin-bottom: 32px;  
        }

        .unified-form-content {  
            width: 100%;  
        }

        .form-row {  
            display: grid;  
            grid-template-columns: 1fr 1fr;  
            gap: 20px;  
            margin-bottom: 20px;  
        }

        .unified-form-content .form-group {  
            margin-bottom: 20px;  
        }

        .unified-form-content .form-group label {  
            display: block;  
            margin-bottom: 8px;  
            font-weight: 600;  
            color: var(--text);  
            font-size: 15px;  
        }

        .unified-form-content .form-group input,  
        .unified-form-content .form-group select,  
        .unified-form-content .form-group textarea {  
            width: 100%;  
            padding: 14px;  
            background: rgba(17, 17, 24, 0.8);  
            border: 1px solid var(--border);  
            border-radius: 10px;  
            color: white;  
            font-size: 16px;  
            transition: border-color 0.3s ease;  
            min-height: 48px;  
        }

        .unified-form-content .form-group textarea {  
            resize: vertical;  
            min-height: 100px;  
            font-family: inherit;  
        }

        .unified-form-content .form-group input:focus,  
        .unified-form-content .form-group select:focus,  
        .unified-form-content .form-group textarea:focus {  
            outline: none;  
            border-color: var(--accent);  
            box-shadow: 0 0 0 2px rgba(0, 212, 255, 0.1);  
        }

        .unified-form-content .form-group input::placeholder,  
        .unified-form-content .form-group textarea::placeholder {  
            color: var(--text-dim);  
            opacity: 0.7;  
        }

        .form-submit {  
            width: 100%;  
            margin: 32px 0 20px 0;  
            font-size: 18px;  
            padding: 18px;  
            min-height: 56px;  
        }

        .form-footer {  
            margin-top: 20px;  
            padding-top: 20px;  
            border-top: 1px solid var(--border);  
        }

        /\* URL Input Styling \*/  
        .url-input-container {  
            display: flex;  
            align-items: center;  
            border: 1px solid var(--border);  
            border-radius: 10px;  
            background: rgba(17, 17, 24, 0.8);  
            transition: border-color 0.3s ease;  
            overflow: hidden;  
        }

        .url-input-container:focus-within {  
            border-color: var(--accent);  
            box-shadow: 0 0 0 2px rgba(0, 212, 255, 0.1);  
        }

        .url-prefix {  
            background: var(--accent);  
            color: var(--primary);  
            padding: 14px 16px;  
            font-weight: 600;  
            font-size: 15px;  
            border-right: 1px solid var(--border);  
            white-space: nowrap;  
        }

        .url-input {  
            border: none \!important;  
            background: transparent \!important;  
            box-shadow: none \!important;  
            flex: 1;  
            margin: 0 \!important;  
        }

        .url-input:focus {  
            outline: none;  
            border: none;  
            box-shadow: none;  
        }

        /\* Help text \*/  
        .help-text {  
            font-size: 13px;  
            color: var(--text-dim);  
            margin-top: 6px;  
        }

        /\* Interactive Pricing Section \*/  
        .pricing-section {  
            padding: 80px 0; /\* Reduced from 100px 0 \*/  
            background: var(--secondary);  
            overflow-x: hidden; /\* Prevent horizontal scroll \*/  
        }

        .pricing-header {  
            text-align: center;  
            margin-bottom: 48px; /\* Reduced from 64px \*/  
        }

        .pricing-title {  
            font-size: 2.5rem; /\* Reduced from 3rem \*/  
            margin-bottom: 20px; /\* Reduced from 24px \*/  
            background: linear-gradient(135deg, var(--text), var(--accent));  
            \-webkit-background-clip: text;  
            \-webkit-text-fill-color: transparent;  
            background-clip: text;  
        }

        .pricing-toggle {  
            display: flex;  
            align-items: center;  
            justify-content: center;  
            gap: 12px; /\* Reduced from 16px \*/  
            margin: 24px 0; /\* Reduced from 32px 0 \*/  
        }

        .toggle-switch {  
            position: relative;  
            width: 50px; /\* Reduced from 60px \*/  
            height: 26px; /\* Reduced from 30px \*/  
            background: var(--border);  
            border-radius: 13px; /\* Reduced from 15px \*/  
            cursor: pointer;  
            transition: background 0.3s ease;  
        }

        .toggle-switch.active {  
            background: var(--accent);  
        }

        .toggle-knob {  
            position: absolute;  
            top: 2px; /\* Reduced from 3px \*/  
            left: 2px; /\* Reduced from 3px \*/  
            width: 22px; /\* Reduced from 24px \*/  
            height: 22px; /\* Reduced from 24px \*/  
            background: white;  
            border-radius: 50%;  
            transition: transform 0.3s ease;  
        }

        .toggle-switch.active .toggle-knob {  
            transform: translateX(24px); /\* Reduced from 30px \*/  
        }

        .pricing-grid {  
            display: grid;  
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); /\* Reduced from 350px \*/  
            gap: 24px; /\* Reduced from 32px \*/  
            max-width: 1000px; /\* Reduced from 1200px \*/  
            margin: 0 auto;  
            width: 100%; /\* Ensure it doesn't exceed container \*/  
        }

        .pricing-card {  
            background: var(--gradient);  
            border: 1px solid var(--border);  
            border-radius: 16px; /\* Reduced from 20px \*/  
            padding: 32px; /\* Reduced from 40px \*/  
            position: relative;  
            transition: all 0.3s ease;  
            text-align: center;  
        }

        .pricing-card:hover {  
            transform: translateY(-6px); /\* Reduced from \-8px \*/  
            box-shadow: 0 16px 32px rgba(0, 0, 0, 0.3); /\* Reduced from 20px 40px \*/  
        }

        .pricing-card.featured {  
            border: 2px solid var(--accent);  
            /\* Removed transform: scale(1.03) to prevent horizontal overflow \*/  
        }

        .pricing-badge {  
            position: absolute;  
            top: \-10px; /\* Reduced from \-12px \*/  
            left: 50%;  
            transform: translateX(-50%);  
            background: linear-gradient(135deg, var(--accent), var(--purple));  
            color: white;  
            padding: 6px 20px; /\* Reduced from 8px 24px \*/  
            border-radius: 16px; /\* Reduced from 20px \*/  
            font-size: 13px; /\* Reduced from 14px \*/  
            font-weight: 600;  
        }

        .pricing-name {  
            font-size: 20px; /\* Reduced from 24px \*/  
            font-weight: 700;  
            margin-bottom: 12px; /\* Reduced from 16px \*/  
        }

        .pricing-price {  
            font-size: 40px; /\* Reduced from 48px \*/  
            font-weight: 700;  
            color: var(--accent);  
            margin-bottom: 6px; /\* Reduced from 8px \*/  
        }

        .pricing-period {  
            color: var(--text-dim);  
            margin-bottom: 20px; /\* Reduced from 24px \*/  
        }

        .pricing-description {  
            color: var(--text-dim);  
            margin-bottom: 24px; /\* Reduced from 32px \*/  
            font-size: 15px; /\* Reduced from 16px \*/  
        }

        .pricing-features {  
            list-style: none;  
            margin-bottom: 24px; /\* Reduced from 32px \*/  
            text-align: left;  
        }

        .pricing-features li {  
            padding: 6px 0; /\* Reduced from 8px 0 \*/  
            display: flex;  
            align-items: center;  
            gap: 10px; /\* Reduced from 12px \*/  
            font-size: 14px;  
        }

        .feature-check {  
            color: var(--success);  
            font-weight: bold;  
            font-size: 16px; /\* Reduced from 18px \*/  
        }

        .feature-cross {  
            color: var(--text-dim);  
            font-weight: bold;  
            font-size: 16px; /\* Reduced from 18px \*/  
        }

        .pricing-cta {  
            width: 100%;  
            padding: 14px; /\* Reduced from 16px \*/  
            font-size: 16px; /\* Reduced from 18px \*/  
            font-weight: 600;  
            border: none;  
            border-radius: 10px; /\* Reduced from 12px \*/  
            cursor: pointer;  
            transition: all 0.3s ease;  
        }

        .pricing-cta.primary {  
            background: linear-gradient(135deg, var(--accent), var(--purple));  
            color: white;  
        }

        .pricing-cta.secondary {  
            background: transparent;  
            color: var(--accent);  
            border: 2px solid var(--accent);  
        }

        .pricing-cta:hover {  
            transform: translateY(-2px);  
        }

        /\* Enhanced ROI Calculator \*/  
        .calculator-section {  
            padding: 80px 0; /\* Reduced from 100px 0 \*/  
            background: var(--primary);  
        }

        .calculator-container {  
            background: var(--gradient);  
            border: 1px solid var(--border);  
            border-radius: 20px; /\* Reduced from 24px \*/  
            padding: 36px; /\* Reduced from 48px \*/  
            max-width: 1100px; /\* Reduced from 1400px \*/  
            margin: 0 auto;  
        }

        .calculator-header {  
            text-align: center;  
            margin-bottom: 36px; /\* Reduced from 48px \*/  
        }

        .calculator-title {  
            font-size: 2.2rem; /\* Reduced from 2.5rem \*/  
            margin-bottom: 12px; /\* Reduced from 16px \*/  
            background: linear-gradient(135deg, var(--text), var(--accent));  
            \-webkit-background-clip: text;  
            \-webkit-text-fill-color: transparent;  
            background-clip: text;  
        }

        .calculator-advanced {  
            display: grid;  
            grid-template-columns: 1fr 1fr;  
            gap: 32px; /\* Reduced from 40px \*/  
            align-items: start;  
        }

        .input-section,  
        .results-section {  
            background: var(--secondary);  
            border: 1px solid var(--border);  
            border-radius: 16px; /\* Reduced from 20px \*/  
            padding: 32px; /\* Reduced from 40px \*/  
        }

        .input-section {  
            position: sticky;  
            top: 100px; /\* Reduced from 120px \*/  
        }

        .section-title {  
            font-size: 1.3rem; /\* Reduced from 1.5rem \*/  
            margin-bottom: 24px; /\* Reduced from 32px \*/  
            display: flex;  
            align-items: center;  
            gap: 10px; /\* Reduced from 12px \*/  
        }

        .input-group {  
            display: flex;  
            align-items: center;  
        }

        .input-prefix {  
            background: var(--accent);  
            color: var(--primary);  
            padding: 14px 16px; /\* Reduced from 16px 20px \*/  
            border-radius: 10px 0 0 10px; /\* Reduced from 12px \*/  
            font-weight: 600;  
            font-size: 15px; /\* Reduced from 16px \*/  
        }

        .input-prefix \+ input {  
            border-radius: 0 10px 10px 0; /\* Reduced from 12px \*/  
            border-left: none;  
        }

        .help-text {  
            font-size: 13px; /\* Reduced from 14px \*/  
            color: var(--text-dim);  
            margin-top: 4px;  
        }

        .metric-card {  
            background: var(--gradient);  
            border: 1px solid var(--border);  
            border-radius: 14px; /\* Reduced from 16px \*/  
            padding: 20px; /\* Reduced from 24px \*/  
            margin-bottom: 16px; /\* Reduced from 20px \*/  
            text-align: center;  
            position: relative;  
            overflow: hidden;  
        }

        .metric-card::before {  
            content: '';  
            position: absolute;  
            top: 0;  
            left: 0;  
            right: 0;  
            height: 4px;  
            background: linear-gradient(90deg, var(--accent), var(--purple));  
        }

        .metric-card .metric-value {  
            font-size: 2.2rem; /\* Reduced from 2.5rem \*/  
            font-weight: 700;  
            margin-bottom: 6px; /\* Reduced from 8px \*/  
            font-family: 'Courier New', monospace;  
        }

        .metric-card .metric-label {  
            font-size: 13px; /\* Reduced from 14px \*/  
            color: var(--text);  
            text-transform: uppercase;  
            letter-spacing: 1px;  
            font-weight: 500;  
        }

        .metric-change {  
            font-size: 11px; /\* Reduced from 12px \*/  
            margin-top: 4px;  
            padding: 3px 6px; /\* Reduced from 4px 8px \*/  
            border-radius: 16px; /\* Reduced from 20px \*/  
            display: inline-block;  
        }

        .positive {  
            color: var(--success);  
            background: rgba(16, 185, 129, 0.1);  
        }

        .negative {  
            color: var(--danger);  
            background: rgba(239, 68, 68, 0.1);  
        }

        .roi-indicator {  
            font-size: 3.2rem; /\* Reduced from 4rem \*/  
            font-weight: 700;  
            text-align: center;  
            margin: 24px 0; /\* Reduced from 32px 0 \*/  
            background: linear-gradient(135deg, var(--accent), var(--purple));  
            \-webkit-background-clip: text;  
            \-webkit-text-fill-color: transparent;  
            background-clip: text;  
            font-family: 'Courier New', monospace;  
        }

        .breakdown-section {  
            margin-top: 32px; /\* Reduced from 40px \*/  
            padding-top: 32px; /\* Reduced from 40px \*/  
            border-top: 1px solid var(--border);  
        }

        .breakdown-item {  
            display: flex;  
            justify-content: space-between;  
            align-items: center;  
            padding: 12px 0; /\* Reduced from 16px 0 \*/  
            border-bottom: 1px solid rgba(161, 161, 170, 0.1);  
            font-size: 14px;  
        }

        .breakdown-item:last-child {  
            border-bottom: none;  
        }

        .breakdown-label {  
            font-weight: 500;  
        }

        .breakdown-value {  
            font-weight: 600;  
            font-family: 'Courier New', monospace;  
        }

        .case-study-comparison {  
            background: var(--primary);  
            border: 1px solid var(--border);  
            border-radius: 10px; /\* Reduced from 12px \*/  
            padding: 20px; /\* Reduced from 24px \*/  
            margin: 20px 0; /\* Reduced from 24px 0 \*/  
        }

        .comparison-grid {  
            display: grid;  
            grid-template-columns: repeat(auto-fit, minmax(130px, 1fr)); /\* Reduced from 150px \*/  
            gap: 12px; /\* Reduced from 16px \*/  
            margin-top: 14px; /\* Reduced from 16px \*/  
        }

        .comparison-item {  
            text-align: center;  
            padding: 14px; /\* Reduced from 16px \*/  
            background: var(--secondary);  
            border-radius: 8px;  
        }

        .comparison-value {  
            font-size: 1.1rem; /\* Reduced from 1.25rem \*/  
            font-weight: 700;  
            color: var(--accent);  
            margin-bottom: 4px;  
        }

        .comparison-label {  
            font-size: 11px; /\* Reduced from 12px \*/  
            color: var(--text-dim);  
            text-transform: uppercase;  
            letter-spacing: 0.5px;  
        }

        .report-section {  
            margin-top: 32px; /\* Reduced from 40px \*/  
            padding: 32px; /\* Reduced from 40px \*/  
            background: var(--gradient);  
            border: 1px solid var(--border);  
            border-radius: 14px; /\* Reduced from 16px \*/  
        }

        .loading-spinner {  
            width: 18px; /\* Reduced from 20px \*/  
            height: 18px;  
            border: 2px solid transparent;  
            border-top: 2px solid white;  
            border-radius: 50%;  
            animation: spin 1s linear infinite;  
        }

        @keyframes spin {  
            0% { transform: rotate(0deg); }  
            100% { transform: rotate(360deg); }  
        }

        .report-content {  
            background: var(--primary);  
            border: 1px solid var(--border);  
            border-radius: 10px; /\* Reduced from 12px \*/  
            padding: 24px; /\* Reduced from 32px \*/  
            margin-top: 20px; /\* Reduced from 24px \*/  
            white-space: pre-wrap;  
            font-family: system-ui, \-apple-system, sans-serif;  
            line-height: 1.8;  
            display: none;  
            max-height: 500px; /\* Reduced from 600px \*/  
            overflow-y: auto;  
            position: relative;  
        }

        .report-header {  
            position: sticky;  
            top: 0;  
            background: var(--primary);  
            padding: 0 0 12px 0; /\* Reduced from 16px \*/  
            margin-bottom: 12px; /\* Reduced from 16px \*/  
            border-bottom: 1px solid var(--border);  
            display: flex;  
            justify-content: space-between;  
            align-items: center;  
            z-index: 10;  
        }

        .report-close-btn {  
            background: var(--danger);  
            color: white;  
            border: none;  
            padding: 6px 12px; /\* Reduced from 8px 16px \*/  
            border-radius: 6px; /\* Reduced from 8px \*/  
            font-size: 13px; /\* Reduced from 14px \*/  
            cursor: pointer;  
            transition: all 0.3s ease;  
        }

        .report-close-btn:hover {  
            background: \#dc2626;  
            transform: translateY(-1px);  
        }

        .report-actions {  
            position: sticky;  
            bottom: 0;  
            background: var(--primary);  
            padding: 12px 0 0 0; /\* Reduced from 16px 0 0 0 \*/  
            margin-top: 12px; /\* Reduced from 16px \*/  
            border-top: 1px solid var(--border);  
            display: flex;  
            gap: 10px; /\* Reduced from 12px \*/  
            z-index: 10;  
        }

        .btn-download {  
            background: var(--success);  
            color: white;  
            border: none;  
            padding: 10px 20px; /\* Reduced from 12px 24px \*/  
            border-radius: 6px; /\* Reduced from 8px \*/  
            font-size: 13px; /\* Reduced from 14px \*/  
            cursor: pointer;  
            display: flex;  
            align-items: center;  
            gap: 6px; /\* Reduced from 8px \*/  
            transition: all 0.3s ease;  
            text-decoration: none;  
        }

        .btn-download:hover {  
            background: \#059669;  
            transform: translateY(-1px);  
        }

        .alert {  
            padding: 14px 18px; /\* Reduced from 16px 20px \*/  
            border-radius: 10px; /\* Reduced from 12px \*/  
            margin: 14px 0; /\* Reduced from 16px 0 \*/  
            font-size: 13px; /\* Reduced from 14px \*/  
        }

        .alert-warning {  
            background: rgba(245, 158, 11, 0.1);  
            border: 1px solid rgba(245, 158, 11, 0.3);  
            color: var(--warning);  
        }

        .alert-success {  
            background: rgba(16, 185, 129, 0.1);  
            border: 1px solid rgba(16, 185, 129, 0.3);  
            color: var(--success);  
        }

        .form-group {  
            margin-bottom: 20px; /\* Reduced from 24px \*/  
        }

        .form-group label {  
            display: block;  
            margin-bottom: 6px; /\* Reduced from 8px \*/  
            font-weight: 600;  
            color: var(--text);  
            font-size: 14px;  
        }

        .form-group select,  
        .form-group input {  
            width: 100%;  
            padding: 12px; /\* Reduced from 16px \*/  
            background: rgba(17, 17, 24, 0.8);  
            border: 1px solid var(--border);  
            border-radius: 10px; /\* Reduced from 12px \*/  
            color: white;  
            font-size: 14px; /\* Reduced from 16px \*/  
            transition: border-color 0.3s ease;  
        }

        .form-group select:focus,  
        .form-group input:focus {  
            outline: none;  
            border-color: var(--accent);  
        }

        .results-section {  
            margin-top: 36px; /\* Reduced from 48px \*/  
            padding: 24px; /\* Reduced from 32px \*/  
            background: rgba(0, 0, 0, 0.3);  
            border-radius: 14px; /\* Reduced from 16px \*/  
            text-align: center;  
        }

        .results-grid {  
            display: grid;  
            grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); /\* Reduced from 200px \*/  
            gap: 20px; /\* Reduced from 24px \*/  
            margin: 24px 0; /\* Reduced from 32px 0 \*/  
        }

        .result-card {  
            padding: 20px; /\* Reduced from 24px \*/  
            background: var(--gradient);  
            border: 1px solid var(--border);  
            border-radius: 10px; /\* Reduced from 12px \*/  
            text-align: center;  
        }

        .result-value {  
            font-size: 28px; /\* Reduced from 32px \*/  
            font-weight: 700;  
            color: var(--accent);  
            margin-bottom: 6px; /\* Reduced from 8px \*/  
        }

        .result-label {  
            color: var(--text-dim);  
            font-size: 13px; /\* Reduced from 14px \*/  
        }

        /\* Trust Indicators \*/  
        .trust-section {  
            padding: 60px 0; /\* Reduced from 80px 0 \*/  
            background: var(--secondary);  
            text-align: center;  
        }

        .trust-grid {  
            display: grid;  
            grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); /\* Reduced from 200px \*/  
            gap: 24px; /\* Reduced from 32px \*/  
            margin-top: 36px; /\* Reduced from 48px \*/  
        }

        .trust-item {  
            padding: 20px; /\* Reduced from 24px \*/  
            background: var(--gradient);  
            border: 1px solid var(--border);  
            border-radius: 10px; /\* Reduced from 12px \*/  
        }

        .trust-icon {  
            font-size: 28px; /\* Reduced from 32px \*/  
            margin-bottom: 12px; /\* Reduced from 16px \*/  
        }

        .trust-title {  
            font-weight: 600;  
            margin-bottom: 6px; /\* Reduced from 8px \*/  
            font-size: 15px;  
        }

        .trust-description {  
            color: var(--text-dim);  
            font-size: 13px; /\* Reduced from 14px \*/  
        }

        /\* Case Studies Section \*/  
        .case-studies-section {  
            padding: 80px 0; /\* Reduced from 100px 0 \*/  
            background: var(--primary);  
        }

        .case-nav {  
            margin-bottom: 36px; /\* Reduced from 48px \*/  
        }

        .nav-tabs {  
            display: flex;  
            justify-content: center;  
            gap: 6px; /\* Reduced from 8px \*/  
            flex-wrap: wrap;  
            background: rgba(0, 0, 0, 0.3);  
            padding: 6px; /\* Reduced from 8px \*/  
            border-radius: 10px; /\* Reduced from 12px \*/  
            max-width: 700px; /\* Reduced from 800px \*/  
            margin: 0 auto;  
        }

        .nav-tab {  
            padding: 10px 20px; /\* Reduced from 12px 24px \*/  
            border-radius: 6px; /\* Reduced from 8px \*/  
            cursor: pointer;  
            transition: all 0.3s ease;  
            color: var(--text-dim);  
            font-weight: 500;  
            white-space: nowrap;  
            font-size: 14px;  
        }

        .nav-tab:hover {  
            background: rgba(0, 212, 255, 0.1);  
            color: var(--accent);  
        }

        .nav-tab.active {  
            background: var(--accent);  
            color: white;  
        }

        .case-content {  
            display: none;  
            animation: fadeIn 0.5s ease;  
        }

        .case-content.active {  
            display: block;  
        }

        .case-grid {  
            display: grid;  
            grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); /\* Reduced from 350px \*/  
            gap: 24px; /\* Reduced from 32px \*/  
        }

        .case-card {  
            background: var(--gradient);  
            border: 1px solid var(--border);  
            border-radius: 14px; /\* Reduced from 16px \*/  
            padding: 24px; /\* Reduced from 32px \*/  
            cursor: pointer;  
            transition: all 0.3s ease;  
        }

        .case-card:hover {  
            transform: translateY(-3px); /\* Reduced from \-4px \*/  
            box-shadow: 0 10px 24px rgba(0, 0, 0, 0.2); /\* Reduced from 12px 30px \*/  
            border-color: var(--accent);  
        }

        .case-company {  
            display: flex;  
            align-items: center;  
            gap: 14px; /\* Reduced from 16px \*/  
            margin-bottom: 20px; /\* Reduced from 24px \*/  
        }

        .company-avatar {  
            width: 42px; /\* Reduced from 48px \*/  
            height: 42px;  
            border-radius: 10px; /\* Reduced from 12px \*/  
            display: flex;  
            align-items: center;  
            justify-content: center;  
            color: white;  
            font-weight: 700;  
            font-size: 16px; /\* Reduced from 18px \*/  
        }

        .company-avatar.large {  
            width: 56px; /\* Reduced from 64px \*/  
            height: 56px;  
            font-size: 20px; /\* Reduced from 24px \*/  
        }

        .case-metrics {  
            display: flex;  
            gap: 24px; /\* Reduced from 32px \*/  
            margin-bottom: 20px; /\* Reduced from 24px \*/  
        }

        .metric {  
            text-align: center;  
        }

        .metric-value {  
            display: block;  
            font-size: 28px; /\* Reduced from 32px \*/  
            font-weight: 700;  
            color: var(--accent);  
            line-height: 1;  
        }

        .metric-label {  
            font-size: 11px; /\* Reduced from 12px \*/  
            color: var(--text-dim);  
            text-transform: uppercase;  
            letter-spacing: 0.5px;  
            margin-top: 4px;  
        }

        .case-quote {  
            font-style: italic;  
            color: var(--text-dim);  
            border-left: 3px solid var(--accent);  
            padding-left: 14px; /\* Reduced from 16px \*/  
            margin: 0;  
            font-size: 14px;  
        }

        .detailed-case {  
            max-width: 700px; /\* Reduced from 800px \*/  
            margin: 0 auto;  
        }

        .case-header {  
            margin-bottom: 36px; /\* Reduced from 48px \*/  
        }

        .case-tags {  
            display: flex;  
            gap: 6px; /\* Reduced from 8px \*/  
            margin-top: 10px; /\* Reduced from 12px \*/  
            flex-wrap: wrap;  
        }

        .tag {  
            background: rgba(0, 212, 255, 0.1);  
            color: var(--accent);  
            padding: 3px 10px; /\* Reduced from 4px 12px \*/  
            border-radius: 14px; /\* Reduced from 16px \*/  
            font-size: 11px; /\* Reduced from 12px \*/  
            border: 1px solid rgba(0, 212, 255, 0.2);  
        }

        .before-after {  
            display: grid;  
            grid-template-columns: 1fr 1fr;  
            gap: 24px; /\* Reduced from 32px \*/  
            margin-bottom: 36px; /\* Reduced from 48px \*/  
        }

        .before-section, .after-section {  
            padding: 20px; /\* Reduced from 24px \*/  
            border-radius: 10px; /\* Reduced from 12px \*/  
            border: 1px solid var(--border);  
        }

        .before-section {  
            background: rgba(239, 68, 68, 0.05);  
            border-left: 4px solid var(--danger);  
        }

        .after-section {  
            background: rgba(16, 185, 129, 0.05);  
            border-left: 4px solid var(--success);  
        }

        .before-section ul li, .after-section ul li {  
            padding: 3px 0; /\* Reduced from 4px 0 \*/  
            color: var(--text-dim);  
            font-size: 14px;  
        }

        .results-summary {  
            background: var(--gradient);  
            border: 1px solid var(--border);  
            border-radius: 14px; /\* Reduced from 16px \*/  
            padding: 24px; /\* Reduced from 32px \*/  
        }

        .metrics-grid {  
            display: grid;  
            grid-template-columns: repeat(auto-fit, minmax(130px, 1fr)); /\* Reduced from 150px \*/  
            gap: 20px; /\* Reduced from 24px \*/  
            margin-top: 20px; /\* Reduced from 24px \*/  
        }

        .metric-box {  
            text-align: center;  
            padding: 16px; /\* Reduced from 20px \*/  
            background: rgba(0, 0, 0, 0.2);  
            border-radius: 10px; /\* Reduced from 12px \*/  
            border: 1px solid var(--border);  
        }

        .metric-box .metric-value {  
            font-size: 32px; /\* Reduced from 36px \*/  
            font-weight: 700;  
            color: var(--accent);  
            display: block;  
            line-height: 1;  
        }

        .metric-box .metric-label {  
            font-size: 11px; /\* Reduced from 12px \*/  
            color: var(--text-dim);  
            text-transform: uppercase;  
            letter-spacing: 0.5px;  
            margin-top: 6px; /\* Reduced from 8px \*/  
        }

        /\* Responsive Design \*/  
        @media (max-width: 1024px) {  
            .calculator-advanced {  
                grid-template-columns: 1fr;  
                gap: 24px; /\* Reduced from 30px \*/  
            }

            .input-section {  
                position: static;  
            }

            .pricing-grid {  
                grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); /\* Reduced from 300px \*/  
            }  
        }

        @media (max-width: 768px) {  
            .nav {  
                padding: 10px 16px; /\* Reduced from 12px 20px \*/  
                position: relative;  
            }  
              
            .nav-links {  
                display: none;  
            }

            .nav-toggle {  
                display: flex;  
            }

            .hero {  
                padding: 80px 0 50px; /\* Reduced from 100px 0 60px \*/  
                text-align: center;  
            }

            .hero h1 {  
                font-size: 2.2rem; /\* Reduced from 2.5rem \*/  
                line-height: 1.2;  
                margin-bottom: 16px; /\* Reduced from 20px \*/  
            }

            .hero-subtitle {  
                font-size: 1rem; /\* Reduced from 1.1rem \*/  
                margin-bottom: 24px; /\* Reduced from 30px \*/  
                padding: 0 10px;  
            }

            .social-proof {  
                margin: 24px 0; /\* Reduced from 30px 0 \*/  
                padding: 20px; /\* Reduced from 24px \*/  
            }

            .social-proof \> div:first-child {  
                flex-direction: column;  
                gap: 16px; /\* Reduced from 20px \*/  
                text-align: center;  
            }

            .social-proof \> div:last-child {  
                grid-template-columns: 1fr;  
                gap: 20px; /\* Reduced from 24px \*/  
                margin-top: 24px; /\* Reduced from 32px \*/  
            }

            .proof-number {  
                font-size: 32px; /\* Reduced from 36px \*/  
            }

            .ai-form-section {  
                padding: 40px 0; /\* Reduced from 50px 0 \*/  
            }

            .ai-form-container {  
                padding: 16px; /\* Reduced from 20px \*/  
                margin: 0 10px;  
                border-radius: 14px; /\* Reduced from 16px \*/  
            }

            .pricing-section {  
                padding: 50px 0; /\* Reduced from 60px 0 \*/  
            }

            .pricing-title {  
                font-size: 2rem; /\* Reduced from 2.2rem \*/  
                margin-bottom: 16px; /\* Reduced from 20px \*/  
            }

            .pricing-grid {  
                grid-template-columns: 1fr;  
                gap: 20px; /\* Reduced from 24px \*/  
                padding: 0 10px;  
            }

            .pricing-card {  
                padding: 20px; /\* Reduced from 24px \*/  
            }

            .pricing-card.featured {  
                transform: none; /\* Remove any scaling on mobile \*/  
                margin-bottom: 16px; /\* Reduced from 20px \*/  
            }

            .hero-ctas {  
                flex-direction: column;  
                align-items: center;  
                gap: 12px; /\* Reduced from 16px \*/  
            }

            .btn {  
                width: 100%;  
                max-width: 260px; /\* Reduced from 280px \*/  
                padding: 14px 20px; /\* Reduced from 16px 24px \*/  
                font-size: 15px; /\* Reduced from 16px \*/  
            }

            .calculator-section {  
                padding: 50px 0; /\* Reduced from 60px 0 \*/  
            }

            .calculator-container {  
                padding: 20px; /\* Reduced from 24px \*/  
                margin: 0 10px;  
            }

            .calculator-title {  
                font-size: 1.8rem; /\* Reduced from 2rem \*/  
                margin-bottom: 10px; /\* Reduced from 12px \*/  
            }

            .calculator-advanced {  
                gap: 16px; /\* Reduced from 20px \*/  
            }

            .input-section, .results-section {  
                padding: 20px; /\* Reduced from 24px \*/  
            }

            .section-title {  
                font-size: 1.2rem; /\* Reduced from 1.3rem \*/  
                margin-bottom: 20px; /\* Reduced from 24px \*/  
            }

            .form-group {  
                margin-bottom: 16px; /\* Reduced from 20px \*/  
            }

            .form-group input,  
            .form-group select {  
                padding: 12px; /\* Reduced from 14px \*/  
                font-size: 16px; /\* Keeps 16px to prevent iOS zoom \*/  
            }

            .comparison-grid {  
                grid-template-columns: repeat(2, 1fr);  
                gap: 10px; /\* Reduced from 12px \*/  
            }

            .comparison-item {  
                padding: 10px; /\* Reduced from 12px \*/  
            }

            .metric-card {  
                padding: 16px; /\* Reduced from 20px \*/  
                margin-bottom: 12px; /\* Reduced from 16px \*/  
            }

            .metric-card .metric-value {  
                font-size: 1.8rem; /\* Reduced from 2rem \*/  
            }

            .roi-indicator {  
                font-size: 2.8rem; /\* Reduced from 3rem \*/  
                margin: 20px 0; /\* Reduced from 24px 0 \*/  
            }

            .breakdown-item {  
                padding: 10px 0; /\* Reduced from 12px 0 \*/  
                font-size: 13px; /\* Reduced from 14px \*/  
            }

            .breakdown-value {  
                font-size: 13px; /\* Reduced from 14px \*/  
            }

            .report-section {  
                padding: 20px; /\* Reduced from 24px \*/  
                margin-top: 20px; /\* Reduced from 24px \*/  
            }

            .case-studies-section {  
                padding: 50px 0; /\* Reduced from 60px 0 \*/  
            }

            .nav-tabs {  
                gap: 3px; /\* Reduced from 4px \*/  
                padding: 5px; /\* Reduced from 6px \*/  
                margin: 0 10px;  
            }

            .nav-tab {  
                padding: 6px 10px; /\* Reduced from 8px 12px \*/  
                font-size: 13px; /\* Reduced from 14px \*/  
                min-width: auto;  
            }

            .case-grid {  
                grid-template-columns: 1fr;  
                gap: 16px; /\* Reduced from 20px \*/  
                padding: 0 10px;  
            }

            .case-card {  
                padding: 16px; /\* Reduced from 20px \*/  
            }

            .case-metrics {  
                gap: 12px; /\* Reduced from 16px \*/  
                justify-content: space-around;  
            }

            .metric-value {  
                font-size: 20px; /\* Reduced from 24px \*/  
            }

            .case-quote {  
                font-size: 13px; /\* Reduced from 14px \*/  
                padding-left: 10px; /\* Reduced from 12px \*/  
            }

            .detailed-case {  
                padding: 0 10px;  
            }

            .before-after {  
                grid-template-columns: 1fr;  
                gap: 16px; /\* Reduced from 20px \*/  
            }

            .before-section, .after-section {  
                padding: 14px; /\* Reduced from 16px \*/  
            }

            .metrics-grid {  
                grid-template-columns: repeat(2, 1fr);  
                gap: 10px; /\* Reduced from 12px \*/  
            }

            .metric-box {  
                padding: 12px; /\* Reduced from 16px \*/  
            }

            .metric-box .metric-value {  
                font-size: 20px; /\* Reduced from 24px \*/  
            }

            .trust-section {  
                padding: 50px 0; /\* Reduced from 60px 0 \*/  
            }

            .trust-grid {  
                grid-template-columns: repeat(2, 1fr);  
                gap: 16px; /\* Reduced from 20px \*/  
                margin-top: 24px; /\* Reduced from 32px \*/  
            }

            .trust-item {  
                padding: 14px; /\* Reduced from 16px \*/  
                text-align: center;  
            }

            .trust-icon {  
                font-size: 24px; /\* Reduced from 28px \*/  
            }

            .trust-title {  
                font-size: 13px; /\* Reduced from 14px \*/  
            }

            .trust-description {  
                font-size: 11px; /\* Reduced from 12px \*/  
            }

            .modal-content {  
                padding: 20px; /\* Reduced from 24px \*/  
                margin: 20px;  
                max-width: none;  
                width: calc(100% \- 40px);  
            }

            .report-content {  
                max-height: 50vh; /\* Reduced from 60vh \*/  
                margin: 12px 0; /\* Reduced from 16px 0 \*/  
                padding: 12px; /\* Reduced from 16px \*/  
                font-size: 13px; /\* Reduced from 14px \*/  
            }

            .report-header {  
                flex-direction: column;  
                gap: 10px; /\* Reduced from 12px \*/  
                text-align: center;  
            }

            .report-actions {  
                flex-direction: column;  
                gap: 6px; /\* Reduced from 8px \*/  
            }

            /\* Enhanced touch targets and mobile usability \*/  
            .btn, .pricing-cta, .nav-cta, .nav-link, .nav-tab {  
                min-height: 44px;  
                display: inline-flex;  
                align-items: center;  
                justify-content: center;  
            }

            .form-group input,  
            .form-group select {  
                min-height: 44px;  
                font-size: 16px; /\* Prevents iOS zoom \*/  
                \-webkit-appearance: none;  
                appearance: none;  
            }

            .ai-form-container iframe {  
                height: 400px \!important; /\* Reduced from 500px \*/  
                min-height: 400px;  
                border-radius: 10px; /\* Reduced from 12px \*/  
            }

            /\* Show mobile form, hide desktop form on mobile \*/  
            .ai-form-container {  
                padding: 24px;  
                margin: 0 10px;  
            }

            .form-row {  
                grid-template-columns: 1fr;  
                gap: 0;  
                margin-bottom: 0;  
            }

            .unified-form-content .form-group {  
                margin-bottom: 16px;  
            }

            .unified-form-content .form-group label {  
                font-size: 14px;  
                margin-bottom: 6px;  
            }

            .unified-form-content .form-group input,  
            .unified-form-content .form-group select,  
            .unified-form-content .form-group textarea {  
                padding: 12px;  
                border-radius: 8px;  
                min-height: 44px;  
            }

            .unified-form-content .form-group textarea {  
                min-height: 80px;  
            }

            .form-submit {  
                margin: 24px 0 16px 0;  
                font-size: 16px;  
                padding: 16px;  
                min-height: 52px;  
            }

            .form-header h3 {  
                font-size: 1.4rem \!important;  
                margin-bottom: 8px \!important;  
            }

            .form-header p {  
                font-size: 14px \!important;  
                margin-bottom: 24px \!important;  
            }

            .form-footer p {  
                font-size: 11px \!important;  
            }

            .url-prefix {  
                padding: 12px;  
                font-size: 14px;  
            }

            .pricing-card, .case-card, .trust-item, .metric-card {  
                margin-bottom: 16px; /\* Reduced from 20px \*/  
            }

            body {  
                \-webkit-text-size-adjust: 100%;  
                text-size-adjust: 100%;  
            }

            .hero-ctas .btn {  
                margin-bottom: 10px; /\* Reduced from 12px \*/  
            }

            .hero-ctas .btn:last-child {  
                margin-bottom: 0;  
            }  
        }

        @media (max-width: 480px) {  
            .container {  
                padding: 0 12px; /\* Reduced from 16px \*/  
            }

            .hero {  
                padding: 70px 0 35px; /\* Reduced from 80px 0 40px \*/  
            }

            .hero h1 {  
                font-size: 1.8rem; /\* Reduced from 2rem \*/  
            }

            .hero-subtitle {  
                font-size: 0.95rem; /\* Reduced from 1rem \*/  
            }

            .social-proof {  
                padding: 14px; /\* Reduced from 16px \*/  
            }

            .proof-number {  
                font-size: 24px; /\* Reduced from 28px \*/  
            }

            .proof-label {  
                font-size: 11px; /\* Reduced from 12px \*/  
            }

            .pricing-title {  
                font-size: 1.6rem; /\* Reduced from 1.8rem \*/  
            }

            .pricing-card {  
                padding: 14px; /\* Reduced from 16px \*/  
            }

            .calculator-title {  
                font-size: 1.4rem; /\* Reduced from 1.6rem \*/  
            }

            .roi-indicator {  
                font-size: 2.2rem; /\* Reduced from 2.5rem \*/  
            }

            .metric-card .metric-value {  
                font-size: 1.3rem; /\* Reduced from 1.5rem \*/  
            }

            .comparison-grid {  
                grid-template-columns: 1fr;  
            }

            .trust-grid {  
                grid-template-columns: 1fr;  
            }

            .nav-tab {  
                padding: 5px 6px; /\* Reduced from 6px 8px \*/  
                font-size: 11px; /\* Reduced from 12px \*/  
            }

            .case-metrics {  
                flex-direction: column;  
                gap: 10px; /\* Reduced from 12px \*/  
                text-align: center;  
            }

            .metrics-grid {  
                grid-template-columns: 1fr;  
            }  
        }

        /\* Loading and Animation States \*/  
        .fade-in {  
            animation: fadeIn 0.6s ease-out;  
        }

        @keyframes fadeIn {  
            from { opacity: 0; transform: translateY(20px); }  
            to { opacity: 1; transform: translateY(0); }  
        }

        .loading {  
            opacity: 0.6;  
            pointer-events: none;  
        }

        /\* Modal Styles \*/  
        .modal {  
            display: none;  
            position: fixed;  
            top: 0;  
            left: 0;  
            width: 100%;  
            height: 100%;  
            background: rgba(0, 0, 0, 0.8);  
            z-index: 2000;  
            align-items: center;  
            justify-content: center;  
        }

        .modal.active {  
            display: flex;  
        }

        .modal-content {  
            background: var(--secondary);  
            border: 1px solid var(--border);  
            border-radius: 16px; /\* Reduced from 20px \*/  
            padding: 36px; /\* Reduced from 48px \*/  
            max-width: 450px; /\* Reduced from 500px \*/  
            width: 90%;  
            position: relative;  
            animation: modalSlideIn 0.3s ease-out;  
        }

        @keyframes modalSlideIn {  
            from { transform: translateY(-50px); opacity: 0; }  
            to { transform: translateY(0); opacity: 1; }  
        }

        .modal-close {  
            position: absolute;  
            top: 16px; /\* Reduced from 20px \*/  
            right: 16px;  
            background: none;  
            border: none;  
            color: var(--text-dim);  
            font-size: 20px; /\* Reduced from 24px \*/  
            cursor: pointer;  
        }  
    \</style\>  
\</head\>  
\<body\>  
    \<\!-- Header \--\>  
    \<header class="header"\>  
        \<div class="nav"\>  
            \<div class="logo"\>  
                \<img src="https://storage.googleapis.com/msgsndr/xIlmI18tLjo5Yl0MOmKi/media/6894a27e3ee129aa90c95662.png" alt="The AI Powerhouse"\>  
                \<span class="logo-text"\>The AI Powerhouse\</span\>  
            \</div\>  
            \<div class="nav-links"\>  
                \<a href="\#calculator" class="nav-link"\>ROI Calculator\</a\>  
                \<a href="\#pricing" class="nav-link"\>Pricing\</a\>  
                \<a href="\#case-studies" class="nav-link"\>Case Studies\</a\>  
                \<a href="\#ai-form" class="nav-cta"\>Have Your AI Call You\</a\>  
            \</div\>  
              
            \<div class="nav-toggle" onclick="toggleMobileMenu()"\>  
                \<span\>\</span\>  
                \<span\>\</span\>  
                \<span\>\</span\>  
            \</div\>  
              
            \<div class="nav-mobile" id="navMobile"\>  
                \<a href="\#calculator" class="nav-link" onclick="closeMobileMenu()"\>ROI Calculator\</a\>  
                \<a href="\#pricing" class="nav-link" onclick="closeMobileMenu()"\>Pricing\</a\>  
                \<a href="\#case-studies" class="nav-link" onclick="closeMobileMenu()"\>Case Studies\</a\>  
                \<a href="\#ai-form" class="nav-cta" onclick="closeMobileMenu()"\>Have Your AI Call You\</a\>  
            \</div\>  
        \</div\>  
    \</header\>

    \<\!-- Hero Section \--\>  
    \<section class="hero"\>  
        \<div class="container"\>  
            \<div class="hero-badge"\>  
                \<span\>🚀\</span\>  
                \<span\>500+ Home Service Businesses Transformed\</span\>  
            \</div\>  
              
            \<h1\>Stop Losing $50,000+ in After-Hours Leads\</h1\>  
            \<p class="hero-subtitle"\>  
                Join 500+ home service businesses capturing more leads and booking more appointments—with an average \<span style="color: var(--accent); font-weight: 700;"\>847% ROI\</span\> in just 6 months.  
            \</p\>

            \<div class="social-proof"\>  
                \<div style="display: flex; align-items: center; gap: 16px; margin-bottom: 32px;"\>  
                    \<div style="display: flex; align-items: center; gap: 8px;"\>  
                        \<div style="display: flex;"\>  
                            \<div style="width: 36px; height: 36px; background: var(--accent); border-radius: 50%; display: flex; align-items: center; justify-content: center; color: white; font-weight: 700; margin-right: \-8px; font-size: 14px;"\>M\</div\>  
                            \<div style="width: 36px; height: 36px; background: var(--purple); border-radius: 50%; display: flex; align-items: center; justify-content: center; color: white; font-weight: 700; margin-right: \-8px; font-size: 14px;"\>S\</div\>  
                            \<div style="width: 36px; height: 36px; background: \#10b981; border-radius: 50%; display: flex; align-items: center; justify-content: center; color: white; font-weight: 700; font-size: 14px;"\>D\</div\>  
                        \</div\>  
                        \<span style="color: var(--text-dim); font-size: 14px;"\>Join 500+ growing businesses\</span\>  
                    \</div\>  
                    \<div style="display: flex; align-items: center; gap: 8px;"\>  
                        \<div style="display: flex; color: \#fbbf24; font-size: 14px;"\>⭐⭐⭐⭐⭐\</div\>  
                        \<span style="color: var(--text-dim); font-size: 14px;"\>4.9/5 (127 reviews)\</span\>  
                    \</div\>  
                \</div\>

                \<div class="hero-ctas"\>  
                    \<a href="\#calculator" class="btn btn-primary"\>  
                        Calculate Your ROI Now →  
                    \</a\>  
                    \<a href="\#case-studies" class="btn btn-secondary"\>  
                        See Case Studies  
                    \</a\>  
                \</div\>

                \<div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 32px; margin-top: 32px;"\>  
                    \<div class="proof-stat"\>  
                        \<span class="proof-number"\>340%\</span\>  
                        \<div class="proof-label"\>AVG MONTHLY GAIN\</div\>  
                        \<div style="color: var(--success); font-size: 11px; margin-top: 4px;"\>↑ 340% conversion\</div\>  
                    \</div\>  
                    \<div class="proof-stat"\>  
                        \<span class="proof-number"\>847%\</span\>  
                        \<div class="proof-label"\>AVERAGE ROI\</div\>  
                        \<div style="color: var(--success); font-size: 11px; margin-top: 4px;"\>↑ in 6 months\</div\>  
                    \</div\>  
                    \<div class="proof-stat"\>  
                        \<span class="proof-number"\>65%\</span\>  
                        \<div class="proof-label"\>FEWER NO-SHOWS\</div\>  
                        \<div style="color: var(--success); font-size: 11px; margin-top: 4px;"\>↑ from 30% to 8%\</div\>  
                    \</div\>  
                \</div\>  
            \</div\>  
        \</div\>  
    \</section\>

    \<\!-- AI Call Form Section \--\>  
    \<section id="ai-form" class="ai-form-section"\>  
        \<div class="container"\>  
            \<\!-- Native Form for All Screen Sizes \--\>  
            \<div class="ai-form-container"\>  
                \<div class="form-header"\>  
                    \<h3 style="color: var(--accent); font-size: 1.8rem; margin-bottom: 12px; text-align: center;"\>  
                        🤖 Have Your AI Call Me  
                    \</h3\>  
                    \<p style="color: var(--text-dim); font-size: 16px; text-align: center; margin-bottom: 32px;"\>  
                        Get a personalized demo and ROI analysis for your business within 15 minutes  
                    \</p\>  
                \</div\>  
                  
                \<form id="ai-form-unified" class="unified-form-content"\>  
                    \<div class="form-row"\>  
                        \<div class="form-group"\>  
                            \<label\>First Name \*\</label\>  
                            \<input type="text" name="firstName" required placeholder="Enter your first name"\>  
                        \</div\>  
                        \<div class="form-group"\>  
                            \<label\>Last Name \*\</label\>  
                            \<input type="text" name="lastName" required placeholder="Enter your last name"\>  
                        \</div\>  
                    \</div\>  
                      
                    \<div class="form-row"\>  
                        \<div class="form-group"\>  
                            \<label\>Business Email \*\</label\>  
                            \<input type="email" name="email" required placeholder="your.email@business.com"\>  
                        \</div\>  
                        \<div class="form-group"\>  
                            \<label\>Phone Number \*\</label\>  
                            \<input type="tel" name="phone" required placeholder="(555) 123-4567"\>  
                        \</div\>  
                    \</div\>  
                      
                    \<div class="form-row"\>  
                        \<div class="form-group"\>  
                            \<label\>Business Name \*\</label\>  
                            \<input type="text" name="businessName" required placeholder="Your Business Name"\>  
                        \</div\>  
                        \<div class="form-group"\>  
                            \<label\>Business Website \*\</label\>  
                            \<div class="url-input-container"\>  
                                \<span class="url-prefix"\>https://\</span\>  
                                \<input type="text" name="website" required placeholder="yourwebsite.com" class="url-input"\>  
                            \</div\>  
                            \<div class="help-text"\>Enter your website URL (we'll add https:// automatically)\</div\>  
                        \</div\>  
                    \</div\>  
                      
                    \<div class="form-row"\>  
                        \<div class="form-group"\>  
                            \<label\>Monthly Revenue Range\</label\>  
                            \<select name="revenueRange"\>  
                                \<option value=""\>Select revenue range\</option\>  
                                \<option value="under50k"\>Under $50k/month\</option\>  
                                \<option value="50k-100k"\>$50k \- $100k/month\</option\>  
                                \<option value="100k-250k"\>$100k \- $250k/month\</option\>  
                                \<option value="250k-500k"\>$250k \- $500k/month\</option\>  
                                \<option value="500k+"\>$500k+/month\</option\>  
                            \</select\>  
                        \</div\>  
                        \<div class="form-group"\>  
                            \<label\>Best Time to Call\</label\>  
                            \<select name="callTime"\>  
                                \<option value=""\>Select preferred time\</option\>  
                                \<option value="morning"\>Morning (8AM \- 12PM)\</option\>  
                                \<option value="afternoon"\>Afternoon (12PM \- 5PM)\</option\>  
                                \<option value="evening"\>Evening (5PM \- 8PM)\</option\>  
                                \<option value="anytime"\>Anytime\</option\>  
                            \</select\>  
                        \</div\>  
                    \</div\>  
                      
                    \<div class="form-group"\>  
                        \<label\>What's Your Biggest Challenge? (Optional)\</label\>  
                        \<textarea name="challenge" rows="4" placeholder="e.g., Missing after-hours calls, slow response times, manual scheduling..."\>\</textarea\>  
                    \</div\>  
                      
                    \<button type="submit" class="btn btn-primary form-submit"\>  
                        📞 Have Your AI Call Me Now  
                    \</button\>  
                      
                    \<div class="form-footer"\>  
                        \<p style="font-size: 13px; color: var(--text-dim); text-align: center; line-height: 1.5; margin-top: 20px;"\>  
                            🔒 Your information is secure and will only be used to provide you with a personalized demo.   
                            Your AI will call you within 15 minutes during business hours.  
                        \</p\>  
                    \</div\>  
                \</form\>  
            \</div\>  
        \</div\>  
    \</section\>

    \<\!-- Interactive Pricing Section \--\>  
    \<section id="pricing" class="pricing-section"\>  
        \<div class="container"\>  
            \<div class="pricing-header"\>  
                \<h2 class="pricing-title"\>Choose Your Growth Plan\</h2\>  
                \<p style="color: var(--text-dim); font-size: 16px; margin-bottom: 24px;"\>  
                    Start free, scale as you grow. No setup fees during launch week.  
                \</p\>  
                  
                \<div class="pricing-toggle"\>  
                    \<span style="color: var(--text-dim);"\>Monthly\</span\>  
                    \<div class="toggle-switch" onclick="togglePricing(this)"\>  
                        \<div class="toggle-knob"\>\</div\>  
                    \</div\>  
                    \<span style="color: var(--accent);"\>Annual (Save 25%)\</span\>  
                \</div\>  
            \</div\>

            \<div class="pricing-grid"\>  
                \<\!-- Essential Plan \--\>  
                \<div class="pricing-card"\>  
                    \<h3 class="pricing-name"\>Essential\</h3\>  
                    \<p class="pricing-description"\>Perfect for getting started\</p\>  
                    \<div class="pricing-price" data-monthly="297" data-annual="223"\>$297\</div\>  
                    \<div class="pricing-period"\>/month\</div\>  
                      
                    \<ul class="pricing-features"\>  
                        \<li\>\<span class="feature-check"\>✓\</span\> 24/7 AI Phone Answering\</li\>  
                        \<li\>\<span class="feature-check"\>✓\</span\> Basic Appointment Scheduling\</li\>  
                        \<li\>\<span class="feature-check"\>✓\</span\> Lead Capture & Routing\</li\>  
                        \<li\>\<span class="feature-check"\>✓\</span\> SMS Confirmations\</li\>  
                        \<li\>\<span class="feature-check"\>✓\</span\> Basic Reporting\</li\>  
                        \<li\>\<span class="feature-cross"\>✗\</span\> Custom AI Training\</li\>  
                        \<li\>\<span class="feature-cross"\>✗\</span\> Advanced Integrations\</li\>  
                        \<li\>\<span class="feature-cross"\>✗\</span\> Priority Support\</li\>  
                    \</ul\>  
                      
                    \<button class="pricing-cta secondary" onclick="purchasePlan('essential')"\>  
                        Get Started Now  
                    \</button\>  
                \</div\>

                \<\!-- Professional Plan (Featured) \--\>  
                \<div class="pricing-card featured"\>  
                    \<div class="pricing-badge"\>Most Popular\</div\>  
                    \<h3 class="pricing-name"\>Professional\</h3\>  
                    \<p class="pricing-description"\>Best value for growing businesses\</p\>  
                    \<div class="pricing-price" data-monthly="497" data-annual="373"\>$497\</div\>  
                    \<div class="pricing-period"\>/month\</div\>  
                      
                    \<ul class="pricing-features"\>  
                        \<li\>\<span class="feature-check"\>✓\</span\> Everything in Essential\</li\>  
                        \<li\>\<span class="feature-check"\>✓\</span\> Custom AI Training\</li\>  
                        \<li\>\<span class="feature-check"\>✓\</span\> Advanced Scheduling Logic\</li\>  
                        \<li\>\<span class="feature-check"\>✓\</span\> CRM Integration\</li\>  
                        \<li\>\<span class="feature-check"\>✓\</span\> Follow-up Sequences\</li\>  
                        \<li\>\<span class="feature-check"\>✓\</span\> Detailed Analytics\</li\>  
                        \<li\>\<span class="feature-check"\>✓\</span\> Priority Email Support\</li\>  
                        \<li\>\<span class="feature-cross"\>✗\</span\> White-label Options\</li\>  
                    \</ul\>  
                      
                    \<button class="pricing-cta primary" onclick="purchasePlan('professional')"\>  
                        Get Started Now  
                    \</button\>  
                \</div\>

                \<\!-- Enterprise Plan \--\>  
                \<div class="pricing-card"\>  
                    \<h3 class="pricing-name"\>Enterprise\</h3\>  
                    \<p class="pricing-description"\>Complete solution for large teams\</p\>  
                    \<div class="pricing-price" data-monthly="997" data-annual="748"\>$997\</div\>  
                    \<div class="pricing-period"\>/month\</div\>  
                      
                    \<ul class="pricing-features"\>  
                        \<li\>\<span class="feature-check"\>✓\</span\> Everything in Professional\</li\>  
                        \<li\>\<span class="feature-check"\>✓\</span\> White-label Solution\</li\>  
                        \<li\>\<span class="feature-check"\>✓\</span\> Multi-location Support\</li\>  
                        \<li\>\<span class="feature-check"\>✓\</span\> Advanced Automations\</li\>  
                        \<li\>\<span class="feature-check"\>✓\</span\> Custom Integrations\</li\>  
                        \<li\>\<span class="feature-check"\>✓\</span\> Dedicated Success Manager\</li\>  
                        \<li\>\<span class="feature-check"\>✓\</span\> 24/7 Phone Support\</li\>  
                        \<li\>\<span class="feature-check"\>✓\</span\> Custom Reporting\</li\>  
                    \</ul\>  
                      
                    \<a href="https://theaipowerhouse.com/pick-a-date" target="\_blank" class="pricing-cta secondary"\>  
                        Schedule Demo  
                    \</a\>  
                \</div\>  
            \</div\>  
        \</div\>  
    \</section\>

    \<\!-- Enhanced ROI Calculator \--\>  
    \<section id="calculator" class="calculator-section"\>  
        \<div class="container"\>  
            \<div class="calculator-container"\>  
                \<div class="calculator-header"\>  
                    \<h2 class="calculator-title"\>Advanced ROI Calculator\</h2\>  
                    \<p style="color: var(--text-dim); font-size: 15px;"\>  
                        Get a comprehensive analysis with industry-specific insights and AI-powered recommendations.  
                    \</p\>  
                \</div\>

                \<div class="calculator-advanced"\>  
                    \<\!-- Input Section \--\>  
                    \<div class="input-section"\>  
                        \<h3 class="section-title"\>  
                            \<span\>📊\</span\>  
                            Business Details  
                        \</h3\>

                        \<div class="form-group"\>  
                            \<label\>Home Service Type\</label\>  
                            \<select id="serviceType" onchange="updateDefaults()"\>  
                                \<option value="hvac"\>HVAC / Air Conditioning\</option\>  
                                \<option value="plumbing"\>Plumbing\</option\>  
                                \<option value="electrical"\>Electrical\</option\>  
                                \<option value="landscaping"\>Landscaping\</option\>  
                                \<option value="roofing"\>Roofing\</option\>  
                                \<option value="cleaning"\>Cleaning Services\</option\>  
                                \<option value="pest"\>Pest Control\</option\>  
                                \<option value="handyman"\>Handyman Services\</option\>  
                                \<option value="garage"\>Garage Door Services\</option\>  
                                \<option value="pool"\>Pool Services\</option\>  
                                \<option value="other"\>Other Home Services\</option\>  
                            \</select\>  
                        \</div\>

                        \<div class="form-group"\>  
                            \<label\>Business Size\</label\>  
                            \<select id="businessSize" onchange="calculate()"\>  
                                \<option value="solo"\>Solo Operator (1-2 people)\</option\>  
                                \<option value="small"\>Small Business (3-10 employees)\</option\>  
                                \<option value="medium"\>Medium Business (11-25 employees)\</option\>  
                                \<option value="large"\>Large Business (25+ employees)\</option\>  
                            \</select\>  
                        \</div\>

                        \<div class="form-group"\>  
                            \<label\>Monthly Incoming Calls/Leads\</label\>  
                            \<input type="number" id="monthlyLeads" value="200" min="10" max="10000" onchange="calculate()"\>  
                            \<div class="help-text"\>Include phone calls, form submissions, and online inquiries\</div\>  
                        \</div\>

                        \<div class="form-group"\>  
                            \<label\>Average Job Value\</label\>  
                            \<div class="input-group"\>  
                                \<span class="input-prefix"\>$\</span\>  
                                \<input type="number" id="avgJobValue" value="450" min="50" max="50000" onchange="calculate()"\>  
                            \</div\>  
                            \<div class="help-text"\>Average revenue per completed job\</div\>  
                        \</div\>

                        \<div class="form-group"\>  
                            \<label\>Current Lead Conversion Rate (%)\</label\>  
                            \<input type="number" id="conversionRate" value="25" min="5" max="100" onchange="calculate()"\>  
                            \<div class="help-text"\>Percentage of leads that become paying customers\</div\>  
                        \</div\>

                        \<div class="form-group"\>  
                            \<label\>Average Response Time to New Leads\</label\>  
                            \<select id="responseTime" onchange="calculate()"\>  
                                \<option value="0.25"\>15 minutes\</option\>  
                                \<option value="0.5"\>30 minutes\</option\>  
                                \<option value="1"\>1 hour\</option\>  
                                \<option value="2"\>2 hours\</option\>  
                                \<option value="4" selected\>4 hours\</option\>  
                                \<option value="8"\>8 hours\</option\>  
                                \<option value="24"\>Next day\</option\>  
                                \<option value="48"\>2+ days\</option\>  
                            \</select\>  
                        \</div\>

                        \<div class="form-group"\>  
                            \<label\>Calls Received After Hours (%)\</label\>  
                            \<input type="number" id="afterHoursPercent" value="35" min="0" max="100" onchange="calculate()"\>  
                            \<div class="help-text"\>Percentage of calls outside business hours (nights, weekends, holidays)\</div\>  
                        \</div\>

                        \<div class="form-group"\>  
                            \<label\>Current No-Show Rate (%)\</label\>  
                            \<input type="number" id="noShowRate" value="25" min="0" max="50" onchange="calculate()"\>  
                            \<div class="help-text"\>Percentage of scheduled appointments that don't show up\</div\>  
                        \</div\>

                        \<div class="form-group"\>  
                            \<label\>Hours Spent on Admin Tasks (per week)\</label\>  
                            \<input type="number" id="adminHours" value="15" min="1" max="80" onchange="calculate()"\>  
                            \<div class="help-text"\>Scheduling, follow-ups, customer service calls\</div\>  
                        \</div\>

                        \<div class="form-group"\>  
                            \<label\>Average Hourly Rate for Admin Work\</label\>  
                            \<div class="input-group"\>  
                                \<span class="input-prefix"\>$\</span\>  
                                \<input type="number" id="hourlyRate" value="25" min="10" max="150" onchange="calculate()"\>  
                            \</div\>  
                        \</div\>  
                    \</div\>

                    \<\!-- Results Section \--\>  
                    \<div class="results-section"\>  
                        \<h3 class="section-title"\>  
                            \<span\>🎯\</span\>  
                            Your ROI Analysis  
                        \</h3\>

                        \<div class="roi-indicator" id="roiIndicator"\>Calculate\</div\>

                        \<div class="metric-card"\>  
                            \<div class="metric-value" id="monthlyLoss" style="color: var(--danger);"\>$0\</div\>  
                            \<div class="metric-label"\>Monthly Revenue Loss\</div\>  
                            \<div class="metric-change negative" id="lossBreakdown"\>From missed opportunities\</div\>  
                        \</div\>

                        \<div class="metric-card"\>  
                            \<div class="metric-value" id="annualRecovery" style="color: var(--success);"\>$0\</div\>  
                            \<div class="metric-label"\>Annual Recovery Potential\</div\>  
                            \<div class="metric-change positive" id="recoveryBreakdown"\>With AI automation\</div\>  
                        \</div\>

                        \<div class="metric-card"\>  
                            \<div class="metric-value" id="paybackPeriod" style="color: var(--accent);"\>0\</div\>  
                            \<div class="metric-label"\>Investment Payback Period\</div\>  
                            \<div class="metric-change" id="paybackDetails"\>Months to break even\</div\>  
                        \</div\>

                        \<div class="breakdown-section"\>  
                            \<h4 style="margin-bottom: 16px; color: var(--accent); font-size: 16px;"\>Revenue Loss Breakdown\</h4\>  
                              
                            \<div class="breakdown-item"\>  
                                \<span class="breakdown-label"\>After-hours missed calls\</span\>  
                                \<span class="breakdown-value" id="afterHoursLoss"\>$0\</span\>  
                            \</div\>  
                              
                            \<div class="breakdown-item"\>  
                                \<span class="breakdown-label"\>Slow response time loss\</span\>  
                                \<span class="breakdown-value" id="responseTimeLoss"\>$0\</span\>  
                            \</div\>  
                              
                            \<div class="breakdown-item"\>  
                                \<span class="breakdown-label"\>No-show revenue loss\</span\>  
                                \<span class="breakdown-value" id="noShowLoss"\>$0\</span\>  
                            \</div\>  
                              
                            \<div class="breakdown-item"\>  
                                \<span class="breakdown-label"\>Admin time cost\</span\>  
                                \<span class="breakdown-value" id="adminCost"\>$0\</span\>  
                            \</div\>  
                              
                            \<div class="breakdown-item"\>  
                                \<span class="breakdown-label"\>\<strong\>Total Monthly Loss\</strong\>\</span\>  
                                \<span class="breakdown-value" id="totalLoss" style="color: var(--danger);"\>\<strong\>$0\</strong\>\</span\>  
                            \</div\>  
                        \</div\>

                        \<div class="case-study-comparison"\>  
                            \<h4 style="margin-bottom: 12px; color: var(--accent); font-size: 15px;"\>Compare to Similar Businesses\</h4\>  
                            \<div class="comparison-grid" id="comparisonGrid"\>  
                                \<\!-- Will be populated by JavaScript \--\>  
                            \</div\>  
                        \</div\>

                        \<div class="report-section"\>  
                            \<h4 style="margin-bottom: 12px; font-size: 16px;"\>📋 Get Detailed AI Analysis Report\</h4\>  
                            \<p style="color: var(--text-dim); margin-bottom: 20px; font-size: 14px;"\>  
                                Generate a comprehensive, personalized report with specific recommendations for your business.  
                            \</p\>  
                              
                            \<button id="generateReport" class="btn btn-primary" onclick="generateDetailedReport()"\>  
                                \<span id="reportBtnText"\>Generate Detailed Report\</span\>  
                                \<div id="reportSpinner" class="loading-spinner" style="display: none;"\>\</div\>  
                            \</button\>  
                              
                            \<div id="reportContent" class="report-content"\>\</div\>  
                              
                            \<div class="alert alert-warning"\>  
                                \<strong\>🔒 Privacy Notice:\</strong\> Your business data is used only to generate your personalized report and is never stored or shared.  
                            \</div\>  
                        \</div\>  
                    \</div\>  
                \</div\>  
            \</div\>  
        \</div\>  
    \</section\>

    \<\!-- Interactive Case Studies Section \--\>  
    \<section id="case-studies" class="case-studies-section"\>  
        \<div class="container"\>  
            \<div class="case-studies-header"\>  
                \<h2 style="font-size: 2.5rem; margin-bottom: 20px; text-align: center;"\>Real Results from Real Businesses\</h2\>  
                \<p style="color: var(--text-dim); font-size: 16px; text-align: center; margin-bottom: 36px;"\>  
                    500+ home service businesses have transformed their operations with our AI automation  
                \</p\>  
            \</div\>

            \<\!-- Case Study Navigation \--\>  
            \<div class="case-nav"\>  
                \<div class="nav-tabs"\>  
                    \<div class="nav-tab active" onclick="showCaseStudy('overview')"\>Overview\</div\>  
                    \<div class="nav-tab" onclick="showCaseStudy('johnson')"\>Johnson HVAC\</div\>  
                    \<div class="nav-tab" onclick="showCaseStudy('elite')"\>Elite Plumbing\</div\>  
                    \<div class="nav-tab" onclick="showCaseStudy('greenscape')"\>GreenScape Lawn\</div\>  
                    \<div class="nav-tab" onclick="showCaseStudy('powertech')"\>PowerTech Electric\</div\>  
                \</div\>  
            \</div\>

            \<\!-- Overview Content \--\>  
            \<div id="case-overview" class="case-content active"\>  
                \<div class="case-grid"\>  
                    \<div class="case-card" onclick="showCaseStudy('johnson')"\>  
                        \<div class="case-company"\>  
                            \<div class="company-avatar" style="background: \#ff6b35;"\>JH\</div\>  
                            \<div\>  
                                \<h4\>Johnson HVAC\</h4\>  
                                \<p style="color: var(--text-dim); font-size: 13px;"\>Phoenix, AZ • 15 employees\</p\>  
                            \</div\>  
                        \</div\>  
                        \<div class="case-metrics"\>  
                            \<div class="metric"\>  
                                \<span class="metric-value"\>340%\</span\>  
                                \<span class="metric-label"\>ROI Increase\</span\>  
                            \</div\>  
                            \<div class="metric"\>  
                                \<span class="metric-value"\>$47K\</span\>  
                                \<span class="metric-label"\>Monthly Recovery\</span\>  
                            \</div\>  
                        \</div\>  
                        \<p class="case-quote"\>"AI automation saved us from losing 60% of our after-hours leads"\</p\>  
                    \</div\>

                    \<div class="case-card" onclick="showCaseStudy('elite')"\>  
                        \<div class="case-company"\>  
                            \<div class="company-avatar" style="background: \#4ecdc4;"\>EP\</div\>  
                            \<div\>  
                                \<h4\>Elite Plumbing\</h4\>  
                                \<p style="color: var(--text-dim); font-size: 13px;"\>Dallas, TX • 8 employees\</p\>  
                            \</div\>  
                        \</div\>  
                        \<div class="case-metrics"\>  
                            \<div class="metric"\>  
                                \<span class="metric-value"\>520%\</span\>  
                                \<span class="metric-label"\>ROI Increase\</span\>  
                            \</div\>  
                            \<div class="metric"\>  
                                \<span class="metric-value"\>$32K\</span\>  
                                \<span class="metric-label"\>Monthly Recovery\</span\>  
                            \</div\>  
                        \</div\>  
                        \<p class="case-quote"\>"Emergency calls are now handled instantly, even at 3 AM"\</p\>  
                    \</div\>

                    \<div class="case-card" onclick="showCaseStudy('greenscape')"\>  
                        \<div class="case-company"\>  
                            \<div class="company-avatar" style="background: \#45b7d1;"\>GL\</div\>  
                            \<div\>  
                                \<h4\>GreenScape Lawn\</h4\>  
                                \<p style="color: var(--text-dim); font-size: 13px;"\>Atlanta, GA • 12 employees\</p\>  
                            \</div\>  
                        \</div\>  
                        \<div class="case-metrics"\>  
                            \<div class="metric"\>  
                                \<span class="metric-value"\>280%\</span\>  
                                \<span class="metric-label"\>ROI Increase\</span\>  
                            \</div\>  
                            \<div class="metric"\>  
                                \<span class="metric-value"\>$28K\</span\>  
                                \<span class="metric-label"\>Monthly Recovery\</span\>  
                            \</div\>  
                        \</div\>  
                        \<p class="case-quote"\>"Seasonal booking chaos is now completely automated"\</p\>  
                    \</div\>

                    \<div class="case-card" onclick="showCaseStudy('powertech')"\>  
                        \<div class="case-company"\>  
                            \<div class="company-avatar" style="background: \#f39c12;"\>PT\</div\>  
                            \<div\>  
                                \<h4\>PowerTech Electric\</h4\>  
                                \<p style="color: var(--text-dim); font-size: 13px;"\>Miami, FL • 20 employees\</p\>  
                            \</div\>  
                        \</div\>  
                        \<div class="case-metrics"\>  
                            \<div class="metric"\>  
                                \<span class="metric-value"\>410%\</span\>  
                                \<span class="metric-label"\>ROI Increase\</span\>  
                            \</div\>  
                            \<div class="metric"\>  
                                \<span class="metric-value"\>$63K\</span\>  
                                \<span class="metric-label"\>Monthly Recovery\</span\>  
                            \</div\>  
                        \</div\>  
                        \<p class="case-quote"\>"Emergency electrical calls converted at 95% vs 40% before"\</p\>  
                    \</div\>  
                \</div\>  
            \</div\>

            \<\!-- Individual Case Studies \--\>  
            \<div id="case-johnson" class="case-content"\>  
                \<div class="detailed-case"\>  
                    \<div class="case-header"\>  
                        \<div class="company-info"\>  
                            \<div class="company-avatar large" style="background: \#ff6b35;"\>JH\</div\>  
                            \<div\>  
                                \<h3\>Johnson HVAC Solutions\</h3\>  
                                \<p style="color: var(--text-dim);"\>Phoenix, AZ • Founded 2018 • 15 employees\</p\>  
                                \<div class="case-tags"\>  
                                    \<span class="tag"\>HVAC\</span\>  
                                    \<span class="tag"\>Emergency Service\</span\>  
                                    \<span class="tag"\>Residential\</span\>  
                                \</div\>  
                            \</div\>  
                        \</div\>  
                    \</div\>

                    \<div class="before-after"\>  
                        \<div class="before-section"\>  
                            \<h4 style="color: var(--danger); margin-bottom: 14px; font-size: 15px;"\>❌ Before AI Automation\</h4\>  
                            \<ul style="list-style: none; padding: 0;"\>  
                                \<li\>• Missing 60% of after-hours emergency calls\</li\>  
                                \<li\>• Average response time: 4+ hours\</li\>  
                                \<li\>• 30% no-show rate for appointments\</li\>  
                                \<li\>• Manual scheduling causing double-bookings\</li\>  
                                \<li\>• Lost $42K monthly in missed opportunities\</li\>  
                            \</ul\>  
                        \</div\>  
                        \<div class="after-section"\>  
                            \<h4 style="color: var(--success); margin-bottom: 14px; font-size: 15px;"\>✅ After AI Implementation\</h4\>  
                            \<ul style="list-style: none; padding: 0;"\>  
                                \<li\>• 95% call capture rate (24/7 availability)\</li\>  
                                \<li\>• 15-second average response time\</li\>  
                                \<li\>• 8% no-show rate with AI reminders\</li\>  
                                \<li\>• Intelligent scheduling prevents conflicts\</li\>  
                                \<li\>• Recovered $47K monthly revenue\</li\>  
                            \</ul\>  
                        \</div\>  
                    \</div\>

                    \<div class="results-summary"\>  
                        \<h4 style="color: var(--accent); margin-bottom: 20px; font-size: 16px;"\>📈 6-Month Results\</h4\>  
                        \<div class="metrics-grid"\>  
                            \<div class="metric-box"\>  
                                \<div class="metric-value"\>340%\</div\>  
                                \<div class="metric-label"\>ROI Increase\</div\>  
                            \</div\>  
                            \<div class="metric-box"\>  
                                \<div class="metric-value"\>$47K\</div\>  
                                \<div class="metric-label"\>Monthly Recovery\</div\>  
                            \</div\>  
                            \<div class="metric-box"\>  
                                \<div class="metric-value"\>95%\</div\>  
                                \<div class="metric-label"\>Call Capture\</div\>  
                            \</div\>  
                            \<div class="metric-box"\>  
                                \<div class="metric-value"\>2.3x\</div\>  
                                \<div class="metric-label"\>Booking Rate\</div\>  
                            \</div\>  
                        \</div\>  
                    \</div\>  
                \</div\>  
            \</div\>

            \<\!-- Add other detailed case studies similarly \--\>  
            \<div id="case-elite" class="case-content"\>  
                \<div class="detailed-case"\>  
                    \<div class="case-header"\>  
                        \<div class="company-info"\>  
                            \<div class="company-avatar large" style="background: \#4ecdc4;"\>EP\</div\>  
                            \<div\>  
                                \<h3\>Elite Plumbing Services\</h3\>  
                                \<p style="color: var(--text-dim);"\>Dallas, TX • Founded 2019 • 8 employees\</p\>  
                                \<div class="case-tags"\>  
                                    \<span class="tag"\>Plumbing\</span\>  
                                    \<span class="tag"\>24/7 Emergency\</span\>  
                                    \<span class="tag"\>Commercial\</span\>  
                                \</div\>  
                            \</div\>  
                        \</div\>  
                    \</div\>  
                    \<div class="results-summary"\>  
                        \<h4 style="color: var(--accent); margin-bottom: 20px; font-size: 16px;"\>📈 Key Results\</h4\>  
                        \<div class="metrics-grid"\>  
                            \<div class="metric-box"\>  
                                \<div class="metric-value"\>520%\</div\>  
                                \<div class="metric-label"\>ROI Increase\</div\>  
                            \</div\>  
                            \<div class="metric-box"\>  
                                \<div class="metric-value"\>$32K\</div\>  
                                \<div class="metric-label"\>Monthly Recovery\</div\>  
                            \</div\>  
                            \<div class="metric-box"\>  
                                \<div class="metric-value"\>87%\</div\>  
                                \<div class="metric-label"\>Emergency Conversion\</div\>  
                            \</div\>  
                            \<div class="metric-box"\>  
                                \<div class="metric-value"\>3 min\</div\>  
                                \<div class="metric-label"\>Response Time\</div\>  
                            \</div\>  
                        \</div\>  
                    \</div\>  
                \</div\>  
            \</div\>

            \<\!-- Continue pattern for other case studies \--\>  
            \<div id="case-greenscape" class="case-content"\>  
                \<div class="detailed-case"\>  
                    \<div class="case-header"\>  
                        \<div class="company-info"\>  
                            \<div class="company-avatar large" style="background: \#45b7d1;"\>GL\</div\>  
                            \<div\>  
                                \<h3\>GreenScape Lawn Care\</h3\>  
                                \<p style="color: var(--text-dim);"\>Atlanta, GA • Founded 2017 • 12 employees\</p\>  
                                \<div class="case-tags"\>  
                                    \<span class="tag"\>Landscaping\</span\>  
                                    \<span class="tag"\>Seasonal\</span\>  
                                    \<span class="tag"\>Residential\</span\>  
                                \</div\>  
                            \</div\>  
                        \</div\>  
                    \</div\>  
                    \<div class="results-summary"\>  
                        \<h4 style="color: var(--accent); margin-bottom: 20px; font-size: 16px;"\>📈 Seasonal Success\</h4\>  
                        \<div class="metrics-grid"\>  
                            \<div class="metric-box"\>  
                                \<div class="metric-value"\>280%\</div\>  
                                \<div class="metric-label"\>ROI Increase\</div\>  
                            \</div\>  
                            \<div class="metric-box"\>  
                                \<div class="metric-value"\>$28K\</div\>  
                                \<div class="metric-label"\>Monthly Recovery\</div\>  
                            \</div\>  
                            \<div class="metric-box"\>  
                                \<div class="metric-value"\>92%\</div\>  
                                \<div class="metric-label"\>Booking Rate\</div\>  
                            \</div\>  
                            \<div class="metric-box"\>  
                                \<div class="metric-value"\>45%\</div\>  
                                \<div class="metric-label"\>More Jobs\</div\>  
                            \</div\>  
                        \</div\>  
                    \</div\>  
                \</div\>  
            \</div\>

            \<div id="case-powertech" class="case-content"\>  
                \<div class="detailed-case"\>  
                    \<div class="case-header"\>  
                        \<div class="company-info"\>  
                            \<div class="company-avatar large" style="background: \#f39c12;"\>PT\</div\>  
                            \<div\>  
                                \<h3\>PowerTech Electrical\</h3\>  
                                \<p style="color: var(--text-dim);"\>Miami, FL • Founded 2015 • 20 employees\</p\>  
                                \<div class="case-tags"\>  
                                    \<span class="tag"\>Electrical\</span\>  
                                    \<span class="tag"\>Commercial\</span\>  
                                    \<span class="tag"\>Emergency\</span\>  
                                \</div\>  
                            \</div\>  
                        \</div\>  
                    \</div\>  
                    \<div class="results-summary"\>  
                        \<h4 style="color: var(--accent); margin-bottom: 20px; font-size: 16px;"\>📈 Enterprise Results\</h4\>  
                        \<div class="metrics-grid"\>  
                            \<div class="metric-box"\>  
                                \<div class="metric-value"\>410%\</div\>  
                                \<div class="metric-label"\>ROI Increase\</div\>  
                            \</div\>  
                            \<div class="metric-box"\>  
                                \<div class="metric-value"\>$63K\</div\>  
                                \<div class="metric-label"\>Monthly Recovery\</div\>  
                            \</div\>  
                            \<div class="metric-box"\>  
                                \<div class="metric-value"\>95%\</div\>  
                                \<div class="metric-label"\>Emergency Conversion\</div\>  
                            \</div\>  
                            \<div class="metric-box"\>  
                                \<div class="metric-value"\>24/7\</div\>  
                                \<div class="metric-label"\>Availability\</div\>  
                            \</div\>  
                        \</div\>  
                    \</div\>  
                \</div\>  
            \</div\>  
        \</div\>  
    \</section\>

    \<\!-- Trust Indicators \--\>  
    \<section class="trust-section"\>  
        \<div class="container"\>  
            \<h2 style="font-size: 2.2rem; margin-bottom: 20px;"\>Why Home Service Businesses Trust Us\</h2\>  
            \<p style="color: var(--text-dim); font-size: 16px;"\>Industry-leading security, reliability, and results\</p\>  
              
            \<div class="trust-grid"\>  
                \<div class="trust-item"\>  
                    \<div class="trust-icon"\>🛡️\</div\>  
                    \<div class="trust-title"\>Enterprise Security\</div\>  
                    \<div class="trust-description"\>SOC 2 certified with end-to-end encryption\</div\>  
                \</div\>  
                \<div class="trust-item"\>  
                    \<div class="trust-icon"\>⚡\</div\>  
                    \<div class="trust-title"\>99.9% Uptime\</div\>  
                    \<div class="trust-description"\>Guaranteed availability with redundant systems\</div\>  
                \</div\>  
                \<div class="trust-item"\>  
                    \<div class="trust-icon"\>📞\</div\>  
                    \<div class="trust-title"\>24/7 Support\</div\>  
                    \<div class="trust-description"\>Human support team available anytime\</div\>  
                \</div\>  
                \<div class="trust-item"\>  
                    \<div class="trust-icon"\>⚡\</div\>  
                    \<div class="trust-title"\>Guaranteed Results\</div\>  
                    \<div class="trust-description"\>See measurable improvements in 30 days or we'll make it right\</div\>  
                \</div\>  
            \</div\>  
        \</div\>  
    \</section\>

    \<\!-- Contact Modal \--\>  
    \<div id="contact-modal" class="modal"\>  
        \<div class="modal-content"\>  
            \<button class="modal-close" onclick="closeModal('contact-modal')"\>\&times;\</button\>  
            \<h3 style="margin-bottom: 20px; color: var(--accent); font-size: 18px;"\>Get Your Free Implementation Plan\</h3\>  
              
            \<form id="contact-form" onsubmit="submitContact(event)"\>  
                \<div class="form-group"\>  
                    \<label\>Business Name\</label\>  
                    \<input type="text" name="business" required\>  
                \</div\>  
                \<div class="form-group"\>  
                    \<label\>Your Name\</label\>  
                    \<input type="text" name="name" required\>  
                \</div\>  
                \<div class="form-group"\>  
                    \<label\>Email\</label\>  
                    \<input type="email" name="email" required\>  
                \</div\>  
                \<div class="form-group"\>  
                    \<label\>Phone Number\</label\>  
                    \<input type="tel" name="phone" required\>  
                \</div\>  
                \<div class="form-group"\>  
                    \<label\>Monthly Revenue\</label\>  
                    \<select name="revenue" required\>  
                        \<option value=""\>Select range\</option\>  
                        \<option value="50k-100k"\>$50k \- $100k\</option\>  
                        \<option value="100k-250k"\>$100k \- $250k\</option\>  
                        \<option value="250k-500k"\>$250k \- $500k\</option\>  
                        \<option value="500k+"\>$500k+\</option\>  
                    \</select\>  
                \</div\>  
                  
                \<button type="submit" class="btn btn-primary" style="width: 100%; margin-top: 16px;"\>  
                    Get My Free Plan  
                \</button\>  
            \</form\>  
        \</div\>  
    \</div\>

    \<\!-- Demo Modal \--\>  
    \<div id="demo-modal" class="modal"\>  
        \<div class="modal-content" style="max-width: 700px;"\>  
            \<button class="modal-close" onclick="closeModal('demo-modal')"\>\&times;\</button\>  
            \<h3 style="margin-bottom: 20px; color: var(--accent); font-size: 18px;"\>See AI in Action\</h3\>  
              
            \<div style="background: \#000; border-radius: 10px; padding: 16px; text-align: center;"\>  
                \<p style="color: var(--text-dim); margin-bottom: 16px; font-size: 14px;"\>  
                    🎥 2-minute demo showing how our AI captures and converts leads  
                \</p\>  
                \<div style="background: var(--secondary); padding: 32px; border-radius: 6px;"\>  
                    \[Demo Video Player\]  
                \</div\>  
                \<button class="btn btn-primary" style="margin-top: 16px;" onclick="openModal('contact-modal'); closeModal('demo-modal');"\>  
                    Get Started Now  
                \</button\>  
            \</div\>  
        \</div\>  
    \</div\>

    \<\!-- Download Form Popup \--\>  
    \<div id="download-form-popup" class="modal"\>  
        \<div class="modal-content"\>  
            \<button class="modal-close" onclick="hideDownloadFormPopup()"\>\&times;\</button\>  
            \<h3 style="margin-bottom: 20px; color: var(--accent); font-size: 18px;"\>Get Your Free Report\</h3\>  
              
            \<div style="text-align: center; margin-bottom: 24px;"\>  
                \<p style="color: var(--text-dim); font-size: 15px; margin-bottom: 6px;"\>  
                    Enter your details to instantly download your personalized ROI analysis:  
                \</p\>  
                \<p style="color: var(--accent); font-size: 13px; font-weight: 600;"\>  
                    🔒 Your information is secure and will never be shared  
                \</p\>  
            \</div\>  
              
            \<form id="lead-capture-form"\>  
                \<div class="form-group"\>  
                    \<label\>First Name \*\</label\>  
                    \<input type="text" id="lead-first-name" required placeholder="Enter your first name"\>  
                \</div\>  
                  
                \<div class="form-group"\>  
                    \<label\>Email Address \*\</label\>  
                    \<input type="email" id="lead-email" required placeholder="Enter your business email"\>  
                \</div\>  
                  
                \<div class="form-group"\>  
                    \<label\>Business Name\</label\>  
                    \<input type="text" id="lead-business" placeholder="Enter your business name (optional)"\>  
                \</div\>  
                  
                \<div class="form-group"\>  
                    \<label\>Phone Number\</label\>  
                    \<input type="tel" id="lead-phone" placeholder="Enter your phone number (optional)"\>  
                \</div\>  
                  
                \<button type="submit" class="btn btn-primary" style="width: 100%; margin-bottom: 12px;"\>  
                    📄 Send My Report & Download Now  
                \</button\>  
                  
                \<p style="color: var(--text-dim); font-size: 11px; text-align: center; line-height: 1.4;"\>  
                    By submitting this form, you agree to receive follow-up communications about AI automation solutions. You can unsubscribe at any time.  
                \</p\>  
            \</form\>  
        \</div\>  
    \</div\>

    \<script\>  
        // Pricing Toggle  
        function togglePricing(toggle) {  
            toggle.classList.toggle('active');  
            const isAnnual \= toggle.classList.contains('active');  
              
            document.querySelectorAll('.pricing-price').forEach(price \=\> {  
                const monthly \= parseInt(price.dataset.monthly);  
                const annual \= parseInt(price.dataset.annual);  
                price.textContent \= '$' \+ (isAnnual ? annual.toLocaleString() : monthly.toLocaleString());  
            });  
        }

        // Service Type Defaults (updated for realistic pricing)  
        const serviceDefaults \= {  
            hvac: { leads: 300, value: 650 },  
            plumbing: { leads: 250, value: 485 },  
            electrical: { leads: 200, value: 520 },  
            landscaping: { leads: 180, value: 380 },  
            roofing: { leads: 150, value: 1200 },  
            cleaning: { leads: 400, value: 180 },  
            pest: { leads: 220, value: 320 },  
            handyman: { leads: 280, value: 280 },  
            garage: { leads: 160, value: 450 },  
            pool: { leads: 140, value: 380 },  
            other: { leads: 200, value: 450 }  
        };

        function updateDefaults() {  
            const serviceType \= document.getElementById('serviceType').value;  
            const defaults \= serviceDefaults\[serviceType\] || serviceDefaults.other;  
              
            const monthlyLeadsElement \= document.getElementById('monthlyLeads');  
            const avgJobValueElement \= document.getElementById('avgJobValue');  
              
            if (monthlyLeadsElement) {  
                monthlyLeadsElement.value \= defaults.leads;  
            }  
            if (avgJobValueElement) {  
                avgJobValueElement.value \= defaults.value;  
            }  
              
            // Trigger calculation after updating defaults  
            calculate();  
        }

        // Main calculate function (called by onchange events)  
        function calculate() {  
            try {  
                const monthlyLeads \= parseInt(document.getElementById('monthlyLeads')?.value || 200);  
                const avgJobValue \= parseInt(document.getElementById('avgJobValue')?.value || 450);  
                const conversionRate \= parseInt(document.getElementById('conversionRate')?.value || 25);  
                const responseTime \= parseFloat(document.getElementById('responseTime')?.value || 4);  
                const afterHoursPercent \= parseInt(document.getElementById('afterHoursPercent')?.value || 35);  
                const noShowRate \= parseInt(document.getElementById('noShowRate')?.value || 25);  
                const adminHours \= parseInt(document.getElementById('adminHours')?.value || 15);  
                const hourlyRate \= parseInt(document.getElementById('hourlyRate')?.value || 25);

                // Calculate current performance metrics  
                const currentConversions \= monthlyLeads \* (conversionRate / 100);  
                const currentRevenue \= currentConversions \* avgJobValue;

                // Calculate losses from various issues  
                const afterHoursLeads \= monthlyLeads \* (afterHoursPercent / 100);  
                const afterHoursLoss \= afterHoursLeads \* 0.6 \* avgJobValue; // 60% loss rate for after-hours

                // Response time impact (every hour delay reduces conversion by 5%)  
                const responseTimeLoss \= monthlyLeads \* Math.max(0, (responseTime \- 0.25) \* 0.05) \* avgJobValue;

                // No-show impact  
                const scheduledJobs \= currentConversions;  
                const noShowLoss \= scheduledJobs \* (noShowRate / 100\) \* avgJobValue;

                // Admin time cost  
                const adminCost \= adminHours \* 4.33 \* hourlyRate; // 4.33 weeks per month

                // Total monthly loss  
                const totalMonthlyLoss \= afterHoursLoss \+ responseTimeLoss \+ noShowLoss \+ adminCost;

                // Calculate potential with AI improvements  
                const aiConversionRate \= Math.min(conversionRate \* 1.6, 92); // 60% improvement, capped at 92%  
                const aiAfterHoursCapture \= 0.95; // 95% capture rate  
                const aiNoShowRate \= Math.max(noShowRate \* 0.3, 5); // 70% reduction in no-shows  
                const aiResponseTime \= 0.004; // 15 seconds average

                // Calculate recovery potential  
                const aiConversions \= monthlyLeads \* (aiConversionRate / 100);  
                const aiRevenue \= aiConversions \* avgJobValue;  
                const monthlyRecovery \= aiRevenue \- currentRevenue \+ (totalMonthlyLoss \* 0.8); // 80% recovery of losses  
                const annualRecovery \= monthlyRecovery \* 12;

                // Calculate ROI (assume Professional plan at $497/month)  
                const monthlyInvestment \= 497;  
                const annualInvestment \= monthlyInvestment \* 12;  
                const netAnnualGain \= annualRecovery \- annualInvestment;  
                const roi \= (netAnnualGain / annualInvestment) \* 100;  
                const paybackMonths \= monthlyInvestment / monthlyRecovery;

                // Update display elements safely  
                const updateElement \= (id, value, prefix \= '', suffix \= '') \=\> {  
                    const element \= document.getElementById(id);  
                    if (element) {  
                        element.textContent \= prefix \+ value \+ suffix;  
                    }  
                };

                // Update main metrics  
                updateElement('roiIndicator', Math.round(roi) \+ '%');  
                updateElement('monthlyLoss', '$' \+ Math.round(totalMonthlyLoss).toLocaleString());  
                updateElement('annualRecovery', '$' \+ Math.round(annualRecovery).toLocaleString());  
                updateElement('paybackPeriod', Math.round(paybackMonths \* 10\) / 10);

                // Update breakdown  
                updateElement('afterHoursLoss', '$' \+ Math.round(afterHoursLoss).toLocaleString());  
                updateElement('responseTimeLoss', '$' \+ Math.round(responseTimeLoss).toLocaleString());  
                updateElement('noShowLoss', '$' \+ Math.round(noShowLoss).toLocaleString());  
                updateElement('adminCost', '$' \+ Math.round(adminCost).toLocaleString());  
                updateElement('totalLoss', '$' \+ Math.round(totalMonthlyLoss).toLocaleString());

                // Update breakdown details  
                updateElement('lossBreakdown', 'From current inefficiencies');  
                updateElement('recoveryBreakdown', 'Annual potential with AI');  
                updateElement('paybackDetails', paybackMonths \< 1 ? 'Less than 1 month' : Math.round(paybackMonths) \+ ' months to break even');

                // Update comparison data  
                updateComparisonData();

            } catch (error) {  
                console.error('Calculation error:', error);  
                // Set default values if calculation fails  
                const updateElement \= (id, value) \=\> {  
                    const element \= document.getElementById(id);  
                    if (element) element.textContent \= value;  
                };  
                  
                updateElement('roiIndicator', 'Error');  
                updateElement('monthlyLoss', '$0');  
                updateElement('annualRecovery', '$0');  
                updateElement('paybackPeriod', 'N/A');  
            }  
        }

        // Update comparison data  
        function updateComparisonData() {  
            const comparisonGrid \= document.getElementById('comparisonGrid');  
            if (\!comparisonGrid) return;

            const serviceType \= document.getElementById('serviceType')?.value || 'other';  
              
            // Industry benchmarks based on service type  
            const benchmarks \= {  
                hvac: { avgROI: 420, leadCapture: 88, responseTime: '2 min' },  
                plumbing: { avgROI: 380, leadCapture: 91, responseTime: '90 sec' },  
                electrical: { avgROI: 350, leadCapture: 85, responseTime: '3 min' },  
                other: { avgROI: 340, leadCapture: 87, responseTime: '2 min' }  
            };

            const data \= benchmarks\[serviceType\] || benchmarks.other;  
              
            comparisonGrid.innerHTML \= \`  
                \<div class="comparison-item"\>  
                    \<div class="comparison-value"\>${data.avgROI}%\</div\>  
                    \<div class="comparison-label"\>Avg Industry ROI\</div\>  
                \</div\>  
                \<div class="comparison-item"\>  
                    \<div class="comparison-value"\>${data.leadCapture}%\</div\>  
                    \<div class="comparison-label"\>Lead Capture Rate\</div\>  
                \</div\>  
                \<div class="comparison-item"\>  
                    \<div class="comparison-value"\>${data.responseTime}\</div\>  
                    \<div class="comparison-label"\>Response Time\</div\>  
                \</div\>  
                \<div class="comparison-item"\>  
                    \<div class="comparison-value"\>6.8\</div\>  
                    \<div class="comparison-label"\>Payback (Months)\</div\>  
                \</div\>  
            \`;  
        }

        // Generate detailed report functionality  
        function generateDetailedReport() {  
            const button \= document.getElementById('generateReport');  
            const spinner \= document.getElementById('reportSpinner');  
            const btnText \= document.getElementById('reportBtnText');  
            const reportContent \= document.getElementById('reportContent');  
              
            if (\!button || \!reportContent) return;  
              
            // Show loading state  
            button.disabled \= true;  
            if (spinner) spinner.style.display \= 'inline-block';  
            if (btnText) btnText.textContent \= 'Generating Report...';  
              
            // Simulate report generation (replace with actual API call)  
            setTimeout(() \=\> {  
                showDownloadFormPopup();  
                  
                // Reset button  
                button.disabled \= false;  
                if (spinner) spinner.style.display \= 'none';  
                if (btnText) btnText.textContent \= 'Generate Detailed Report';  
            }, 2000);  
        }

        // Show download form popup  
        function showDownloadFormPopup() {  
            const popup \= document.getElementById('download-form-popup');  
            if (popup) {  
                popup.style.display \= 'flex';  
                document.body.style.overflow \= 'hidden';  
            }  
        }

        // Hide download form popup  
        function hideDownloadFormPopup() {  
            const popup \= document.getElementById('download-form-popup');  
            if (popup) {  
                popup.style.display \= 'none';  
                document.body.style.overflow \= 'auto';  
            }  
        }

        // ROI Calculator (legacy function, keeping for compatibility)  
        function calculateROI(event) {  
            if (event) event.preventDefault();  
            calculate();  
        }

        // Modal Functions  
        function openModal(modalId) {  
            const modal \= document.getElementById(modalId);  
            if (modal) {  
                modal.classList.add('active');  
                document.body.style.overflow \= 'hidden';  
            }  
        }

        function closeModal(modalId) {  
            const modal \= document.getElementById(modalId);  
            if (modal) {  
                modal.classList.remove('active');  
                document.body.style.overflow \= 'auto';  
            }  
        }

        // Purchase Functions  
        function purchasePlan(plan) {  
            // Store plan selection  
            localStorage.setItem('selectedPlan', plan);  
            openModal('contact-modal');  
        }

        // Contact Form Submission  
        async function submitContact(event) {  
            event.preventDefault();  
              
            const formData \= new FormData(event.target);  
            const data \= Object.fromEntries(formData.entries());  
              
            // Add selected plan if any  
            const selectedPlan \= localStorage.getItem('selectedPlan');  
            if (selectedPlan) {  
                data.selectedPlan \= selectedPlan;  
            }  
              
            try {  
                // Show loading state  
                const submitBtn \= event.target.querySelector('button\[type="submit"\]');  
                const originalText \= submitBtn.textContent;  
                submitBtn.textContent \= 'Submitting...';  
                submitBtn.disabled \= true;  
                  
                // Submit to webhook  
                const response \= await fetch('https://services.leadconnectorhq.com/hooks/xIlmI18tLjo5Yl0MOmKi/webhook-trigger/0f7451a5-3c8c-4497-8ce9-c258022f68c7', {  
                    method: 'POST',  
                    headers: {  
                        'Content-Type': 'application/json',  
                    },  
                    body: JSON.stringify(data)  
                });  
                  
                if (response.ok) {  
                    // Show success message  
                    alert('Thank you\! We\\'ll contact you within 15 minutes to discuss your custom implementation plan.');  
                    closeModal('contact-modal');  
                      
                    // Clear form  
                    event.target.reset();  
                    localStorage.removeItem('selectedPlan');  
                } else {  
                    throw new Error('Submission failed');  
                }  
                  
                // Reset button  
                submitBtn.textContent \= originalText;  
                submitBtn.disabled \= false;  
                  
            } catch (error) {  
                console.error('Form submission error:', error);  
                alert('There was an error submitting your information. Please try again or call us directly.');  
                  
                // Reset button  
                const submitBtn \= event.target.querySelector('button\[type="submit"\]');  
                submitBtn.textContent \= 'Get My Free Plan';  
                submitBtn.disabled \= false;  
            }  
        }

        // Chat Widget  
        function openChat() {  
            // Integrate with your preferred chat solution  
            alert('Live chat opening... (Integrate with Intercom, Drift, etc.)');  
        }

        // Case Studies Functionality  
        function showCaseStudy(caseId) {  
            // Hide all case contents  
            document.querySelectorAll('.case-content').forEach(content \=\> {  
                content.classList.remove('active');  
            });  
              
            // Show selected case content  
            const targetContent \= document.getElementById('case-' \+ caseId);  
            if (targetContent) {  
                targetContent.classList.add('active');  
            }  
              
            // Update nav tabs  
            document.querySelectorAll('.nav-tab').forEach(tab \=\> {  
                tab.classList.remove('active');  
            });  
              
            // Find and activate corresponding tab  
            const tabs \= document.querySelectorAll('.nav-tab');  
            const caseNames \= \['overview', 'johnson', 'elite', 'greenscape', 'powertech'\];  
            const tabIndex \= caseNames.indexOf(caseId);  
            if (tabIndex \>= 0 && tabs\[tabIndex\]) {  
                tabs\[tabIndex\].classList.add('active');  
            }  
        }

        // Lead capture form submission  
        document.addEventListener('DOMContentLoaded', function() {  
            const leadForm \= document.getElementById('lead-capture-form');  
            if (leadForm) {  
                leadForm.addEventListener('submit', async function(e) {  
                    e.preventDefault();  
                      
                    const firstName \= document.getElementById('lead-first-name')?.value;  
                    const email \= document.getElementById('lead-email')?.value;  
                    const business \= document.getElementById('lead-business')?.value;  
                    const phone \= document.getElementById('lead-phone')?.value;  
                      
                    if (\!firstName || \!email) {  
                        alert('Please fill in all required fields.');  
                        return;  
                    }  
                      
                    const submitBtn \= leadForm.querySelector('button\[type="submit"\]');  
                    const originalText \= submitBtn.textContent;  
                    submitBtn.textContent \= 'Sending Report...';  
                    submitBtn.disabled \= true;  
                      
                    try {  
                        // Submit lead data  
                        const leadData \= {  
                            firstName,  
                            email,  
                            business,  
                            phone,  
                            source: 'ROI Calculator Report',  
                            reportRequested: true  
                        };  
                          
                        const response \= await fetch('https://services.leadconnectorhq.com/hooks/xIlmI18tLjo5Yl0MOmKi/webhook-trigger/0f7451a5-3c8c-4497-8ce9-c258022f68c7', {  
                            method: 'POST',  
                            headers: {  
                                'Content-Type': 'application/json',  
                            },  
                            body: JSON.stringify(leadData)  
                        });  
                          
                        if (response.ok) {  
                            // Generate and show report  
                            generateAndShowReport();  
                            hideDownloadFormPopup();  
                        } else {  
                            throw new Error('Failed to submit');  
                        }  
                          
                    } catch (error) {  
                        console.error('Lead submission error:', error);  
                        alert('There was an error sending your report. Please try again.');  
                    }  
                      
                    submitBtn.textContent \= originalText;  
                    submitBtn.disabled \= false;  
                });  
            }

            // Mobile AI form submission  
            const mobileAiForm \= document.getElementById('mobile-ai-form');  
            if (mobileAiForm) {  
                mobileAiForm.addEventListener('submit', async function(e) {  
                    e.preventDefault();  
                      
                    // Get form data  
                    const formData \= new FormData(mobileAiForm);  
                    const data \= Object.fromEntries(formData.entries());  
                      
                    // Validate required fields  
                    if (\!data.firstName || \!data.lastName || \!data.email || \!data.phone || \!data.businessName || \!data.website) {  
                        alert('Please fill in all required fields marked with \*');  
                        return;  
                    }  
                      
                    // Format website URL \- automatically add https:// if not present  
                    let websiteUrl \= data.website.trim();  
                    if (websiteUrl) {  
                        // Remove any existing protocol  
                        websiteUrl \= websiteUrl.replace(/^https?:\\/\\//, '');  
                        // Add https://  
                        data.website \= 'https://' \+ websiteUrl;  
                    }  
                      
                    // Validate email format  
                    const emailRegex \= /^\[^\\s@\]+@\[^\\s@\]+\\.\[^\\s@\]+$/;  
                    if (\!emailRegex.test(data.email)) {  
                        alert('Please enter a valid email address');  
                        return;  
                    }  
                      
                    // Show loading state  
                    const submitBtn \= mobileAiForm.querySelector('.mobile-form-submit');  
                    const originalText \= submitBtn.textContent;  
                    submitBtn.textContent \= '📞 Submitting...';  
                    submitBtn.disabled \= true;  
                      
                    try {  
                        // Add source information  
                        data.source \= 'Mobile AI Call Form';  
                        data.formType \= 'ai\_call\_request';  
                          
                        // Submit to the new webhook  
                        const response \= await fetch('https://services.leadconnectorhq.com/hooks/xIlmI18tLjo5Yl0MOmKi/webhook-trigger/32a0ddc1-2586-4f72-9f18-511a0c52cb0b', {  
                            method: 'POST',  
                            headers: {  
                                'Content-Type': 'application/json',  
                            },  
                            body: JSON.stringify(data)  
                        });  
                          
                        if (response.ok) {  
                            // Show success message  
                            submitBtn.textContent \= '✅ Request Submitted\!';  
                            submitBtn.style.background \= 'var(--success)';  
                              
                            // Show success modal or message  
                            setTimeout(() \=\> {  
                                alert('Thank you\! Your AI will call you within 15 minutes during business hours to discuss how we can help grow your business.');  
                                mobileAiForm.reset();  
                                submitBtn.textContent \= originalText;  
                                submitBtn.style.background \= '';  
                                submitBtn.disabled \= false;  
                            }, 1500);  
                        } else {  
                            throw new Error('Submission failed');  
                        }  
                          
                    } catch (error) {  
                        console.error('Mobile form submission error:', error);  
                        alert('There was an error submitting your request. Please try again or call us directly.');  
                          
                        // Reset button  
                        submitBtn.textContent \= '📞 Have Your AI Call Me Now';  
                        submitBtn.disabled \= false;  
                    }  
                });

                // Add real-time URL formatting as user types  
                const websiteInput \= mobileAiForm.querySelector('input\[name="website"\]');  
                if (websiteInput) {  
                    websiteInput.addEventListener('input', function(e) {  
                        let value \= e.target.value;  
                        // Remove https:// or http:// if user types it  
                        value \= value.replace(/^https?:\\/\\//, '');  
                        e.target.value \= value;  
                    });

                    websiteInput.addEventListener('blur', function(e) {  
                        let value \= e.target.value.trim();  
                        if (value) {  
                            // Clean up common issues  
                            value \= value.replace(/^https?:\\/\\//, ''); // Remove protocol  
                            value \= value.replace(/\\/$/, ''); // Remove trailing slash  
                            e.target.value \= value;  
                        }  
                    });  
                }  
            }  
        });

        // Generate and show detailed report  
        function generateAndShowReport() {  
            const reportContent \= document.getElementById('reportContent');  
            if (\!reportContent) return;  
              
            const serviceType \= document.getElementById('serviceType')?.value || 'other';  
            const monthlyLeads \= document.getElementById('monthlyLeads')?.value || '200';  
            const avgJobValue \= document.getElementById('avgJobValue')?.value || '450';  
              
            const reportText \= \`  
AI AUTOMATION ROI ANALYSIS REPORT  
Generated: ${new Date().toLocaleDateString()}

EXECUTIVE SUMMARY  
\================  
Based on your business profile, implementing AI automation could recover significant lost revenue and streamline operations.

CURRENT SITUATION ANALYSIS  
\==========================  
Service Type: ${serviceType.toUpperCase()}  
Monthly Leads: ${monthlyLeads}  
Average Job Value: $${avgJobValue}

IDENTIFIED REVENUE LEAKS  
\========================  
1\. After-hours missed calls: 35% of leads lost outside business hours  
2\. Slow response times: Every hour delay reduces conversion by 5%  
3\. No-show appointments: 25% revenue loss from missed appointments  
4\. Manual admin overhead: 15+ hours/week of inefficient processes

RECOVERY POTENTIAL WITH AI  
\==========================  
✓ 24/7 Lead Capture: 95% call answer rate  
✓ Instant Response: 15-second average response time  
✓ Smart Scheduling: 70% reduction in no-shows  
✓ Automated Follow-ups: 40% increase in conversion rates

IMPLEMENTATION ROADMAP  
\======================  
Month 1: AI Phone System Setup & Training  
Month 2: CRM Integration & Process Optimization  
Month 3: Advanced Automation & Analytics  
Month 4-6: Scale & Optimize for Maximum ROI

NEXT STEPS  
\==========  
1\. Schedule your free implementation consultation  
2\. Customize AI training for your specific service type  
3\. Begin 30-day pilot program with full support  
4\. Scale successful automations across all operations

This analysis is based on industry averages and your specific business inputs.   
Actual results may vary based on implementation and market conditions.  
            \`;  
              
            reportContent.innerHTML \= \`  
                \<div class="report-header"\>  
                    \<h4\>Your Personalized ROI Analysis Report\</h4\>  
                    \<button class="report-close-btn" onclick="hideReport()"\>Close\</button\>  
                \</div\>  
                \<div style="white-space: pre-line; font-family: monospace; line-height: 1.6;"\>${reportText}\</div\>  
                \<div class="report-actions"\>  
                    \<button class="btn-download" onclick="downloadReport()"\>  
                        📄 Download PDF Report  
                    \</button\>  
                    \<a href="https://theaipowerhouse.com/pick-a-date" target="\_blank" class="btn-download" style="background: var(--accent);"\>  
                        📞 Schedule Implementation Call  
                    \</a\>  
                \</div\>  
            \`;  
              
            reportContent.style.display \= 'block';  
            reportContent.scrollIntoView({ behavior: 'smooth' });  
        }

        function hideReport() {  
            const reportContent \= document.getElementById('reportContent');  
            if (reportContent) {  
                reportContent.style.display \= 'none';  
            }  
        }

        function downloadReport() {  
            // Create a simple text file download  
            const reportText \= document.querySelector('\#reportContent div\[style\*="white-space"\]')?.textContent || 'Report content not available';  
            const blob \= new Blob(\[reportText\], { type: 'text/plain' });  
            const url \= URL.createObjectURL(blob);  
            const a \= document.createElement('a');  
            a.href \= url;  
            a.download \= 'AI-ROI-Analysis-Report.txt';  
            document.body.appendChild(a);  
            a.click();  
            document.body.removeChild(a);  
            URL.revokeObjectURL(url);  
        }

        // Smooth Scrolling  
        document.querySelectorAll('a\[href^="\#"\]').forEach(anchor \=\> {  
            anchor.addEventListener('click', function (e) {  
                e.preventDefault();  
                const target \= document.querySelector(this.getAttribute('href'));  
                if (target) {  
                    target.scrollIntoView({  
                        behavior: 'smooth',  
                        block: 'start'  
                    });  
                }  
            });  
        });

        // Header Scroll Effect  
        window.addEventListener('scroll', () \=\> {  
            const header \= document.querySelector('.header');  
            if (header) {  
                if (window.scrollY \> 100\) {  
                    header.style.background \= 'rgba(17, 17, 26, 0.98)';  
                } else {  
                    header.style.background \= 'rgba(17, 17, 26, 0.95)';  
                }  
            }  
        });

        // Mobile Navigation Functions  
        function toggleMobileMenu() {  
            const navToggle \= document.querySelector('.nav-toggle');  
            const navMobile \= document.getElementById('navMobile');  
              
            navToggle.classList.toggle('active');  
            navMobile.classList.toggle('active');  
        }

        function closeMobileMenu() {  
            const navToggle \= document.querySelector('.nav-toggle');  
            const navMobile \= document.getElementById('navMobile');  
              
            navToggle.classList.remove('active');  
            navMobile.classList.remove('active');  
        }

        // Close mobile menu when clicking outside  
        document.addEventListener('click', function(event) {  
            const nav \= document.querySelector('.nav');  
            const navMobile \= document.getElementById('navMobile');  
              
            if (navMobile.classList.contains('active') && \!nav.contains(event.target)) {  
                closeMobileMenu();  
            }  
        });

        // Initialize calculator when page loads  
        document.addEventListener('DOMContentLoaded', () \=\> {  
            updateDefaults();  
            calculate();  
        });  
    \</script\>  
\</body\>  
\</html\>

