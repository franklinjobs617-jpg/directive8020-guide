import Link from "next/link";
import { MessageSquare } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="border-t border-border/50 bg-background/50">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-5">
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-3">
              Directive 8020 Guides
            </h3>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Your comprehensive guide to surviving the Cassiopeia. All endings,
              choices, characters, and more.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-3">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/directive-8020-walkthrough"
                  className="text-xs text-muted-foreground hover:text-foreground transition-colors"
                >
                  Full Walkthrough
                </Link>
              </li>
              <li>
                <Link
                  href="/directive-8020-all-endings"
                  className="text-xs text-muted-foreground hover:text-foreground transition-colors"
                >
                  All Endings Guide
                </Link>
              </li>

              <li>
                <Link
                  href="/directive-8020-how-to-save-everyone"
                  className="text-xs text-muted-foreground hover:text-foreground transition-colors"
                >
                  How to Save Everyone
                </Link>
              </li>
              <li>
                <Link
                  href="/directive-8020-trophy-guide"
                  className="text-xs text-muted-foreground hover:text-foreground transition-colors"
                >
                  Trophy Guide
                </Link>
              </li>
              <li>
                <Link
                  href="/directive-8020-trophy-list"
                  className="text-xs text-muted-foreground hover:text-foreground transition-colors"
                >
                  Trophy List
                </Link>
              </li>
              <li>
                <Link
                  href="/directive-8020-choices-consequences"
                  className="text-xs text-muted-foreground hover:text-foreground transition-colors"
                >
                  Choices & Consequences
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-3">
              Resources
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/directive-8020-system-requirements"
                  className="text-xs text-muted-foreground hover:text-foreground transition-colors"
                >
                  System Requirements
                </Link>
              </li>
              <li>
                <Link
                  href="/directive-8020-release-time"
                  className="text-xs text-muted-foreground hover:text-foreground transition-colors"
                >
                  Release Time
                </Link>
              </li>
              <li>
                <Link
                  href="/directive-8020-characters"
                  className="text-xs text-muted-foreground hover:text-foreground transition-colors"
                >
                  Characters
                </Link>
              </li>
              <li>
                <Link
                  href="/directive-8020-cast-actors"
                  className="text-xs text-muted-foreground hover:text-foreground transition-colors"
                >
                  Cast & Actors
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-3">
              More Game Guides
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/games/project-mist"
                  className="text-xs text-muted-foreground hover:text-foreground transition-colors"
                >
                  Project: Mist Guide
                </Link>
              </li>
              <li>
                <Link
                  href="/games/thick-as-thieves"
                  className="text-xs text-muted-foreground hover:text-foreground transition-colors"
                >
                  Thick As Thieves Guide
                </Link>
              </li>
              <li>
                <Link
                  href="/games/thick-as-thieves/release-date"
                  className="text-xs text-muted-foreground hover:text-foreground transition-colors"
                >
                  Thick As Thieves Release
                </Link>
              </li>
              <li>
                <Link
                  href="/games/mina-the-hollower"
                  className="text-xs text-muted-foreground hover:text-foreground transition-colors"
                >
                  Mina the Hollower Guide
                </Link>
              </li>
              <li>
                <Link
                  href="/games/mina-the-hollower/steam-deck"
                  className="text-xs text-muted-foreground hover:text-foreground transition-colors"
                >
                  Mina Steam Deck
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-3">Site</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/about"
                  className="text-xs text-muted-foreground hover:text-foreground transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy-policy"
                  className="text-xs text-muted-foreground hover:text-foreground transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms-of-use"
                  className="text-xs text-muted-foreground hover:text-foreground transition-colors"
                >
                  Terms of Use
                </Link>
              </li>
              <li>
                <Link
                  href="/copyright-infringement"
                  className="text-xs text-muted-foreground hover:text-foreground transition-colors"
                >
                  Copyright Infringement
                </Link>
              </li>
              <li>
                <a
                  href="https://minathehollower.base64pro.top/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-muted-foreground hover:text-foreground transition-colors"
                >
                  Mina the Hollower
                </a>
              </li>
              <li>
                <a
                  href="https://ipooket.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-muted-foreground hover:text-foreground transition-colors"
                >
                  Romestead
                </a>
              </li>
              <li>
                <a
                  href="https://fatekeeperguide.online/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-muted-foreground hover:text-foreground transition-colors"
                >
                  Fate Keeper Guide
                </a>
              </li>
              <li>
                <a
                  href="http://romesteadguide.top/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-muted-foreground hover:text-foreground transition-colors"
                >
                  Romestead Guide
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-6 border-t border-border/30 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground">
          <Link
            href="https://www.reddit.com/r/enjoy4game/"
            className="inline-flex items-center gap-2 text-sm"
          >
            <MessageSquare className="h-4 w-4" />
            Join our community: r/enjoy4game
          </Link>
          </p>
          <div className="flex items-center gap-4">
            <p className="text-xs text-muted-foreground">
              Not affiliated with Supermassive Games or Bandai Namco. Fan-made
              guide.
            </p>
            <a
              href="https://www.foundrlist.com/product/directive8020?utm_source=badge&amp;utm_medium=embed"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex shrink-0"
            >
              <img
                src="https://www.foundrlist.com/api/badge/directive8020"
                alt="Featured on FoundrList"
                width={75}
                height={24}
                className="h-6 w-auto opacity-80 hover:opacity-100 transition-opacity"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
